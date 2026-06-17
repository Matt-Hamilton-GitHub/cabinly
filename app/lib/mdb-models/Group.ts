import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
    title: {type: String, required: true},
    img_url: {type: String, required: true},
    group_desc: {type: String},
    capacity: {type: Number, required: true},
    usersSignedUpRef: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    reserved: {type: Number, default: 0},
    guides: [{name: String, quideId: String}],
},{timestamps: true})


export default mongoose.models.Group || mongoose.model('Group', GroupSchema, 'Groups')