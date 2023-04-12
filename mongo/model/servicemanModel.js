import mongoose from "mongoose";

export const Serviceman = mongoose.model("servicemen", new mongoose.Schema({
    name: String,
    surname: String,
    thirdName: String,
    rank: String,
    dateOfBirth: Date,
}))
