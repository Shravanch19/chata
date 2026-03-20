"use client"

import React from 'react'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative px-4">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />

      {/* Content */}
      <div className="relative w-full max-w-md">
        <LoginForm />
      </div>

    </div>
  )
}