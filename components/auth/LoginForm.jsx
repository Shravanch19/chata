"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import AuthCard from "./AuthCard"
import InputField from "./InputField"

export default function LoginForm() {

  const router = useRouter()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

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

      const res = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false
      })

      if (res?.error) {
        setError("Invalid email or password")
        return
      }

      router.push("/")

    } catch {
      setError("Something went wrong. Try again.")
    } finally {
      setLoading(false)
    }


  }

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" })
  }

  return (


    <AuthCard
      title="Login"
      footer={
        <>
          Don't have an account?
          <Link href="/register" className="ml-1 font-medium text-gray-900">
            Register
          </Link>
        </>
      }
    >

      <form onSubmit={handleSubmit} className="space-y-4">

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
          placeholder="Enter password"
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
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>


      {/* Divider */}

      <div className="flex items-center my-6">
        <div className="grow border-t border-gray-300"></div>

        <span className="mx-3 text-sm text-gray-500 whitespace-nowrap">
          OR continue with Google
        </span>

        <div className="grow border-t border-gray-300"></div>
      </div>


      {/* Google Login */}

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-5 h-5"
        >
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.86-6.86C35.68 2.64 30.2 0 24 0 14.62 0 6.48 5.42 2.56 13.32l7.98 6.2C12.46 13.22 17.72 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.14 24.5c0-1.64-.14-3.2-.4-4.7H24v9h12.44c-.54 2.9-2.18 5.36-4.66 7l7.2 5.6C43.9 37.28 46.14 31.42 46.14 24.5z" />
          <path fill="#FBBC05" d="M10.54 28.52a14.48 14.48 0 010-9.04l-7.98-6.2A23.95 23.95 0 000 24c0 3.82.92 7.44 2.56 10.72l7.98-6.2z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.92-2.14 15.9-5.82l-7.2-5.6c-2 1.34-4.56 2.12-8.7 2.12-6.28 0-11.54-3.72-13.46-8.98l-7.98 6.2C6.48 42.58 14.62 48 24 48z" />
        </svg>

        Continue with Google

      </button>

    </AuthCard>

  )
}
