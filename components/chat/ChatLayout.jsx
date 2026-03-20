"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import EmptyState from "./EmptyState";

export default function ChatLayout() {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className="h-screen bg-black text-white flex">

            <Sidebar
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />

            <div className="flex-1 flex flex-col">
                <motion.div
                    key={selectedChat ? "chat" : "empty"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full"
                >
                    {selectedChat ? (
                        <ChatWindow chat={selectedChat} />
                    ) : (
                        <EmptyState />
                    )}
                </motion.div>
            </div>
        </div>
    );
}