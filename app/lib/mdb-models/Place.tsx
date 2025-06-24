import mongoose from "mongoose";
const { Schema } = mongoose;


const PlaceSchema = new mongoose.Schema({
    name : {type: String, required: true},
    description: {type: String, required: true},
    images_url: [{type: String, required: true}],
    seasons: [{type: String}],
    cabinsRef: [{
        type: Schema.Types.ObjectId,
        ref: 'Cabin',
    }],
    activitiesRef : [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }]
})

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema, 'Places')