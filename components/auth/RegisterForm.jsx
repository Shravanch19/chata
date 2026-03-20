"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { AuthCard } from "./AuthCard"
import { InputField } from "./InputField"

export default function RegisterForm() {

  const router = useRouter()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = ({ target }) => {
    setForm(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(data?.message || "Registration failed")
      }

      setForm({
        username: "",
        email: "",
        password: ""
      })

      router.push("/login")

    } catch (err) {
      setError(err.message)
    }

    setLoading(false)
  }

  return (
    <AuthCard
      title="Create Account"
      footer={
        <p className="text-gray-400 text-sm text-center">
          Already have an account?
          <Link
            href="/login"
            className="ml-1 text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Login
          </Link>
        </p>
      }
    >

      <form onSubmit={handleSubmit} className="space-y-5">

        <InputField
          label="Username"
          name="username"
          placeholder="your_username"
          value={form.username}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
        />

        {error && (
          <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl transition disabled:opacity-50 shadow-lg shadow-indigo-500/20"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

      </form>

    </AuthCard>
  )
}