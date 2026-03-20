"use client"

import React from "react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProfilePage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl"
        >
          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* AVATAR */}
            <div className="relative">
              <img
                src={session?.user?.image || "https://avatars.githubusercontent.com/u/142566979?v=4"}
                alt="avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500/40 shadow-lg"
              />
            </div>

            {/* USER INFO */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-semibold tracking-wide">
                {session?.user?.name || "User Name"}
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                {session?.user?.email}
              </p>

              {/* BIO */}
              <p className="mt-3 text-gray-300 text-sm max-w-md">
                Passionate developer building real-time applications. Loves clean UI and scalable systems.
              </p>

              {/* STATS */}
              <div className="flex gap-6 mt-4 justify-center md:justify-start">
                <div>
                  <p className="text-lg font-semibold text-indigo-400">120</p>
                  <p className="text-xs text-gray-400">Friends</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-indigo-400">45</p>
                  <p className="text-xs text-gray-400">Chats</p>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">

            <Link
              href="/home"
              className="flex-1 text-center bg-indigo-500 hover:bg-indigo-600 py-3 rounded-xl transition shadow-lg shadow-indigo-500/20"
            >
              New Chat
            </Link>

            <Link
              href="/settings"
              className="flex-1 text-center border border-white/10 hover:bg-white/5 py-3 rounded-xl transition"
            >
              Settings
            </Link>

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex-1 bg-red-500/80 hover:bg-red-600 py-3 rounded-xl transition"
            >
              Log Out
            </button>
          </div>
        </motion.div>

        {/* EXTRA SECTION (OPTIONAL GALLERY / POSTS) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-32 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-sm"
            >
              Photo {item}
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}