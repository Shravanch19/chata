export default function SidebarActions() {
    return (
        <div className="p-4 border-t border-white/10 space-y-2">
            <button className="w-full text-sm py-2 rounded-xl bg-white/5 hover:bg-white/10">
                + New Friend
            </button>
            <button className="w-full text-sm py-2 rounded-xl bg-white/5 hover:bg-white/10">
                + Start Chat
            </button>
            <button className="w-full text-sm py-2 rounded-xl bg-white/5 hover:bg-white/10">
                + New Group
            </button>
        </div>
    );
}