"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function CurrentUserCard({ user }) {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/")
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              {user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U'}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">You are logged in</h2>
          <p className="text-gray-500">Here are your current details</p>
        </div>

        <div className="space-y-4 mb-6">
          {user?.name && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600 text-sm font-semibold block mb-1">Name</label>
              <p className="text-gray-900 font-medium">{user.name}</p>
            </div>
          )}
          
          {user?.email && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600 text-sm font-semibold block mb-1">Email</label>
              <p className="text-gray-900 font-medium break-all">{user.email}</p>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>

          <Link
            href="/"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition duration-200"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
