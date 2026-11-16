import { mongoose } from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    orderNumber: {
        type: String,
        unique: true,
        required: true
    },
    items: [{
        productName: String,
        quantity: Number,
        price: Number
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        postalCode: String
    },
    status: {
        type: String,
        enum: [
            "placed", "confirmed", "shipped",
            "out_for_delivery", "delivered",
            "cancelled", "returned"
        ],
        default: "placed"
    },
    orderedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export default new mongoose.Model('Order',orderSchema);