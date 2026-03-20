"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function UnauthorizedPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/login")
    }
  }, [countdown, router])

  return (<div className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />

    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">

      {/* Icon */}
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-white mb-3 tracking-tight">
        Authentication Required
      </h1>

      <p className="text-gray-400 mb-8">
        You must log in to continue.
      </p>

      {/* Countdown */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
        <p className="text-gray-400 text-sm mb-2">
          Redirecting in
        </p>

        <div className="text-5xl font-bold text-indigo-400 animate-pulse">
          {countdown}
        </div>

        <p className="text-gray-500 text-xs mt-2">
          seconds
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-gray-500 text-xs">OR</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Button */}
      <button
        onClick={() => router.push("/login")}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-xl transition duration-200 shadow-lg shadow-indigo-500/20"
      >
        Go to Login Now
      </button>

      {/* Footer hint */}
      <p className="text-gray-500 text-xs mt-6">
        Secure access via authentication
      </p>
    </div>
  </div>)
}
