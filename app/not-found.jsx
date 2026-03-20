"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-10 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-xl max-w-md"
      >

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold text-indigo-400 mb-4"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-2xl shadow-lg transition"
          >
            Go Back Home
          </Link>

          <Link
            href="/"
            className="px-6 py-3 border border-gray-700 rounded-2xl hover:bg-gray-900 transition"
          >
            Explore
          </Link>
        </div>

      </motion.div>

    </div>
  )
}