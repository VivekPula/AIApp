import { Model,Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phone: String,
    role: {
        type: String,
        enum: ["customer", "support", "admin"],
        default: "customer"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const User = new Model('User',userSchema);

export default User;