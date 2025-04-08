import mongoose from 'mongoose'

const CabinScheme = new mongoose.Schema({
    name: {type: String, required: true },
    location: {type: String, required: true},
    availability: {type: Array, default: []},
    cabinID: {type: String, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, default: 0},
    occupancy:{type: Number, require: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    tags: {type: Array}

}, {timestamps: true})

export default mongoose.models.Cabin || mongoose.model('Cabin', CabinScheme, 'Cabins')