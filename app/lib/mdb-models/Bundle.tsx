import mongoose from "mongoose";
const {Schema } = mongoose;

const BundleSchema = new mongoose.Schema({
bundleType: {type: String},   // custom or default
cabin: {type: Schema.Types.ObjectId, ref: 'Cabin'},
place: {type: Schema.Types.ObjectId, ref: 'Place'},
activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
group: {type: Schema.Types.ObjectId, ref: 'Group'},
guides: [{name : {type: String}, guide_img: {type: String}}],
price: {type: Number },
duration: {type: Date},

})


export default mongoose.models.Bundle || mongoose.model('Bundle', BundleSchema, 'Bundles')