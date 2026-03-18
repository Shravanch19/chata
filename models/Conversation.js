const ConversationSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["private", "group"],
            required: true,
        },

        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        // only for group
        groupName: String,
        groupAvatar: String,
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        lastMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Conversation", ConversationSchema);