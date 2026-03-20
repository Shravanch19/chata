export default function MessageBubble({ text, isOwn }) {
    return (
        <div
            className={`max-w-xs px-4 py-2 rounded-xl text-sm ${isOwn
                    ? "bg-indigo-500 ml-auto text-white"
                    : "bg-white/5 text-gray-300"
                }`}
        >
            {text}
        </div>
    );
}