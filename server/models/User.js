import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        
    },
    city: {
        type: String,
        
    },
    state: {
        type: String,
        
    },
    zip: {
        type: String,
        
    },
    country: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true,
});

const User = mongoose.model("User",userSchema)

export default User;