"use client"

import React from 'react'
import Link from "next/link"
import { useSession } from "next-auth/react"

const Nav = () => {
    const { data: session, status } = useSession()
    const isLoggedIn = status === "authenticated" && !!session

    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black/70 backdrop-blur sticky top-0 z-50">
            <Link href="/" className="text-xl font-semibold tracking-wide text-indigo-400">
                ChatApp
            </Link>

            <div className="hidden md:flex gap-8 text-gray-300">
                <Link href="/home" className="hover:text-white transition">Home</Link>
                <Link href="/about" className="hover:text-white transition">About</Link>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </div>

            <div className="flex">
                {isLoggedIn ? (
                    <Link href="/profile" className="px-4 py-2 text-sm bg-indigo-500 hover:bg-indigo-600 rounded-xl shadow">
                        Profile
                    </Link>
                ) : (
                    <Link href="/login" className="px-4 py-2 text-sm bg-indigo-500 hover:bg-indigo-600 rounded-xl shadow">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Nav