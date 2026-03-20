export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <h2 className="text-2xl font-semibold text-white">
                No chat selected
            </h2>
            <p className="text-gray-400 mt-2 max-w-sm">
                Select a conversation or start a new one.
            </p>

            <button className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20">
                Start New Chat
            </button>
        </div>
    );
}