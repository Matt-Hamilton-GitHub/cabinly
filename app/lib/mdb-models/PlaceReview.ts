import mongoose from "mongoose";


const PlaceReview = new mongoose.Schema({
   authorName: String,
   authorInitials: String,
   rating: Number,
   date: Date,
   body: String

})

export default mongoose.models.PlaceReview || mongoose.model('PlaceReview', PlaceReview, 'PlaceReviews')