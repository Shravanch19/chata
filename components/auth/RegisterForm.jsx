"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import AuthCard from "./AuthCard"
import InputField from "./InputField"

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
        <>
          Already have an account?
          <Link
            href="/login"
            className="ml-1 font-medium text-gray-900"
          >
            Login
          </Link>
        </>
      }
    >

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <InputField
          label="Username"
          name="username"
          placeholder="Enter username"
          value={form.username}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Create password"
          value={form.password}
          onChange={handleChange}
        />

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating..." : "Register"}
        </button>

      </form>

    </AuthCard>
  )
}