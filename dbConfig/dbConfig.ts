import mongoose from "mongoose";


const MONGODB_URI="mongodb+srv://abodhale:blgedfFHVAz4aSsV@cluster0.qdtfbk8.mongodb.net/CTRS?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) 
{
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
}

let cached = (global as any).mongoose;

if (!cached) 
{
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectMongoDB()
{
    if (cached.conn) {
      return cached.conn;
    }
  
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI, {
        dbName: "CTRS", 
        bufferCommands: false,
      }).then((mongoose) => mongoose);
    }
  
    cached.conn = await cached.promise;
    return cached.conn;
}

