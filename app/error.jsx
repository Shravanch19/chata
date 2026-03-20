"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative px-4">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-purple-900/20" />

      {/* Content */}
      <div className="relative w-full max-w-md text-center">

        {/* Error Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl">

          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          {/* Error Title */}
          <h1 className="text-3xl font-bold mb-2">
            Oops! Something went wrong
          </h1>

          {/* Error Message */}
          <p className="text-gray-400 mb-6 text-sm">
            We encountered an unexpected error. Please try again or go back to the home page.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => reset()}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl transition shadow-lg shadow-indigo-500/20"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="block w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition border border-white/20"
            >
              Go Back Home
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}