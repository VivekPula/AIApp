import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    title: String,
    status: {
        type: String,
        enum: ["active", "resolved", "escalated", "closed"],
        default: "active"
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    summary: String,
    lastMessageAt: Date
}, { timestamps: true });

export default new mongoose.Model('Conversation',conversationSchema);