import mongoose from "mongoose";


const Guide = new mongoose.Schema({
    name: String,
    initials: String,
    role: String,
    bio: String,
    yrsExp: Number,
    rating: Number,
    reviewCount: [Number],
    tags: [String],
    imgUrl: String

})

export default mongoose.models.Guide || mongoose.model('Guide', Guide, 'Guides')