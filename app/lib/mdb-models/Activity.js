import mongoose from 'mongoose'

const ActivitySchema = new mongoose.Schema({
    title : {type: String, required: true},
    a_desc: {type: String, required: true},
    seasons: {type: Array},
    groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}]
    
},{timestamps: true})

export default mongoose.models.Activities || mongoose.model('Activity', ActivitySchema, 'Activities')