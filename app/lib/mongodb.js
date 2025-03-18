import mongoose from "mongoose"

const MONGO_CABINLY = `mongodb+srv://${process.env.ADMIN_NAME}:${process.env.MATT_PASSWORD}@cabinly-cluster.zwgjf.mongodb.net/?retryWrites=true&w=majority&appName=CABINLY-CLUSTER`

let cached = global.mongoose || { conn: null, promise: null };

export const connectMDB = async () =>{
    try {
        if (cached.conn) return cached.conn;

        if (!cached.promise) {
            cached.promise = mongoose.connect(MONGO_CABINLY);
        }
        cached.conn = await cached.promise;
        console.log('MongoDB Connected succesfully...');
        return cached.conn;
    } catch(err){
        console.error(err);
        process.exit(1);
    }
}
