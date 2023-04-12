import mongoose from "mongoose";

export const Unit = mongoose.model("units", new mongoose.Schema({
    name: String,

}))
