import mongoose, { Mongoose, mongo } from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        }
    },
    { timestamps: true } //create (createdAt, updatedAt data auto)
);

const Message = mongoose.model("Message", messageSchema);

export default Message;