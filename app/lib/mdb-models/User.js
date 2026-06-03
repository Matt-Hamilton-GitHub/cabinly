import mongoose, { Schema } from 'mongoose'

const MedalSchema = new Schema(
  {
    id:          { type: String, required: true },
    name:        { type: String, required: true },
    emoji:       { type: String, required: true },
    description: { type: String, required: true },
    earnedAt:    { type: String, default: null },  // null = locked
  },
  { _id: false }  // no separate _id for subdocuments
)

const UserSchema = new mongoose.Schema(
  {
    name:  { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    hash:  { type: String, required: true },

    // points & tier
    points: { type: Number, default: 0 },
    tier: {
      type: String,
      enum: ['Explorer', 'Adventurer', 'Pioneer', 'Summit'],
      default: 'Explorer',
    },

    // medals
    medals: [{ type: String, default: [] }],

    // references
    bookings:            [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    savedPlaces:         [{ type: Schema.Types.ObjectId, ref: 'Place' }],
    completedActivities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
    completedTrips:      [{ type: Schema.Types.ObjectId, ref: 'Place' }],

    // profile
    avatarUrl:  { type: String, default: '' },
    joinedAt:   { type: String, default: () => new Date().toISOString() },

    // referral
    referredBy:   { type: Schema.Types.ObjectId, ref: 'User', default: null },
    referralCount:{ type: Number, default: 0 },
  },
  { timestamps: true }
)

export default mongoose.models.User ||
  mongoose.model('User', UserSchema, 'Users')