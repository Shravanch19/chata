export default function ChatHeader({ name }) {
    return (
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="font-semibold text-white">{name}</h3>
            <span className="text-sm text-gray-400">Online</span>
        </div>
    );
}