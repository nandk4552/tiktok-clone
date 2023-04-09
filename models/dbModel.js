import mongoose from "mongoose";

// schema for the database
const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
})


// collecton inside the database
export default mongoose.model('tiktokVideos', tiktokSchema)