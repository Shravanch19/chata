"use client"

import React from "react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

const Page = () => {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-200">

        {session ? (
          <>
            <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Welcome, {session.user.name}
            </h1>

            <div className="space-y-3 text-gray-700 text-sm">

              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Name</span>
                <span>{session?.user?.name}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Email</span>
                <span>{session?.user?.email}</span>
              </div>

            </div>

            <Link
              href="/chat"
              className="mt-6 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
            >
              New Chat
            </Link>

            <button
              onClick={() => signOut()}
              className="mt-6 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
            >
              Log Out
            </button>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-xl font-medium text-gray-700">
              Please log in to see your information.
            </h1>
            <button
              onClick={() => (window.location.href = "/login")}
              className="mt-6 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
            >
              Log In
            </button>
          </div>
        )}

      </div>

    </div>
  )
}

export default Page