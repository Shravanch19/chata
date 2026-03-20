import ChatItem from "./ChatItem";
import SidebarActions from "./SidebarActions";

const chats = [
    { id: 1, name: "Rahul Sharma", lastMessage: "Hey bro!" },
    { id: 2, name: "Team Project", lastMessage: "Deadline tomorrow" },
    { id: 3, name: "Ananya", lastMessage: "Let's catch up" },
];

export default function Sidebar({ selectedChat, setSelectedChat }) {
    return (
        <div className="w-full max-w-sm border-r border-white/10 flex flex-col">

            <div className="p-4 border-b border-white/10">
                <h2 className="text-lg font-semibold">Chats</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {chats.map((chat) => (
                    <ChatItem
                        key={chat.id}
                        chat={chat}
                        selected={selectedChat?.id === chat.id}
                        onClick={() => setSelectedChat(chat)}
                    />
                ))}
            </div>

            <SidebarActions />
        </div>
    );
}