"use client"

import { useState } from "react"

export function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange
}) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === "password"

  return (
    <div className="flex flex-col gap-2">

      <label
        htmlFor={name}
        className="text-sm text-gray-400"
      >
        {label}
      </label>

      <div className="relative">

        <input
          id={name}
          name={name}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="
            w-full px-4 py-3 pr-12
            bg-white/5 
            border border-white/10 
            rounded-xl 
            text-white 
            placeholder-gray-500 
            focus:outline-none 
            focus:border-indigo-500 
            focus:ring-2 
            focus:ring-indigo-500/40
            transition-all
          "
        />

        {/* Toggle Button */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
          >
            {showPassword ? (
              // Eye OFF (hide)
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-10-7a9.956 9.956 0 012.293-3.95M6.18 6.18A9.953 9.953 0 0112 5c5 0 9 4 10 7a9.96 9.96 0 01-4.293 4.95M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 6L3 3" />
              </svg>
            ) : (
              // Eye ON (show)
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.938 0C21.674 15.053 17.837 18 12 18c-5.837 0-9.674-2.947-10.938-6a9.956 9.956 0 0121.876 0z" />
              </svg>
            )}
          </button>
        )}

      </div>

    </div>
  )
}