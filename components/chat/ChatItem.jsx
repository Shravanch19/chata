export default function ChatItem({ chat, selected, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`p-4 rounded-xl cursor-pointer transition border 
      ${selected
                    ? "bg-indigo-500/10 border-indigo-500/30"
                    : "border-transparent hover:bg-white/5"
                }`}
        >
            <div className="font-medium text-white">{chat.name}</div>
            <div className="text-sm text-gray-400 truncate">
                {chat.lastMessage}
            </div>
        </div>
    );
}