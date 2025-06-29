import mongoose from "mongoose";
const { Schema } = mongoose;


const PlaceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String, required: true },
    images_url: [{ type: String, required: true }],
    seasons: [{
        season: { type: String },
        activitiesRef: [{
            type: Schema.Types.ObjectId,
            ref: 'Activity'
        }]
    }],
    cabinsRef: [{
        type: Schema.Types.ObjectId, ref: 'Cabin'}],
})

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema, 'Places')