"use client";
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 text-center text-gray-500 border-t border-gray-800 bg-black">
      © {new Date().getFullYear()} ChatApp. All rights reserved.
    </footer>
  )
}

export default Footer