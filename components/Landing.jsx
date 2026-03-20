"use client";
import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight"
                >
                    Real-Time Chat.
                    <br />
                    <span className="text-indigo-400">Reimagined.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 max-w-xl text-gray-400"
                >
                    A fast, scalable WebSocket-powered chat experience with typing indicators,
                    group messaging, and real-time sync.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex gap-4"
                >
                    <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-2xl shadow-lg">
                        Get Started
                    </button>
                    <button className="px-6 py-3 border border-gray-700 rounded-2xl hover:bg-gray-900">
                        Live Demo
                    </button>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-12 text-center">
                    Features
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Instant Messaging",
                            desc: "Low-latency communication powered by WebSockets.",
                        },
                        {
                            title: "Typing Indicators",
                            desc: "Know when someone is typing in real-time.",
                        },
                        {
                            title: "Group Chats",
                            desc: "Create and manage chat rooms effortlessly.",
                        },
                        {
                            title: "Read Receipts",
                            desc: "Blue ticks for message delivery and reads.",
                        },
                        {
                            title: "Scalable Architecture",
                            desc: "Built to handle thousands of concurrent users.",
                        },
                        {
                            title: "Secure",
                            desc: "Authentication and encrypted communication.",
                        },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:scale-105 transition"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Futuristic Section */}
            <section className="py-24 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl font-bold">
                        Built for the Next Generation of Communication
                    </h2>
                    <p className="mt-6 text-gray-400">
                        Experience blazing-fast messaging with a futuristic interface designed
                        for modern users.
                    </p>
                </motion.div>
            </section>
            
        </div>
    )
}

export default Landing