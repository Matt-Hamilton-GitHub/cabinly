import mongoose from "mongoose";
const { Schema } = mongoose;


const PlaceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: {type: String},
    country: { type: String, required: true },
    price: {type: Number, required: true},
    region: {type: String},
    type: {type: String, required: true},
    continent: {type: String},
    flag: {type: String},
    tags: [{type: String}],
    description: { type: String, required: true },
    images_url: [{ type: String, required: true }],
    seasons: [{type: String}],
    badge: {type: String},
    rating: {type: Number},
    reviewCount: {type: Number},
    travellers: {type: Number},
    cabinsRef: [{
        type: Schema.Types.ObjectId, ref: 'Cabin'
    }],
    activities: [{
        type: Schema.Types.ObjectId, ref: 'Activity'
    }],
    guides: [{ type: Schema.Types.ObjectId, ref: 'Guide'}],
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    availableDates: [{
        from: Date,
        to: Date,
    }],
    coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], 
      required: true
    }
  },

})

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema, 'Places')