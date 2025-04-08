
import mongoose from 'mongoose'

const UserSheme = new mongoose.Schema({
    name: {type: String, required: true},
    email:{type: String, required: true},
    hash:{type: String, required: true},
}, {timestamps: true})

export default mongoose.models.User || mongoose.model('User', UserSheme, 'Users')