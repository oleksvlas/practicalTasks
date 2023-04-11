import mongoose from "mongoose";

export const Position = mongoose.model("positions", new mongoose.Schema({
    name: String
}))

