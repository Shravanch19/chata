import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ chat }) {
    return (
        <div className="flex flex-col h-full">

            <ChatHeader name={chat.name} />

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <MessageBubble text="Hey there!" />
                <MessageBubble text="Hello 👋" isOwn />
                <MessageBubble text="How's your project going?" />
            </div>

            <div className="p-4 border-t border-white/10 flex gap-3">
                <input
                    placeholder="Type a message..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-indigo-500"
                />
                <button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl">
                    Send
                </button>
            </div>
        </div>
    );
}