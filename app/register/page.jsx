"use client"

import RegisterForm from "@/components/auth/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative px-4">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />

      {/* Content */}
      <div className="relative w-full max-w-md">
        <RegisterForm />
      </div>

    </div>
  )
}