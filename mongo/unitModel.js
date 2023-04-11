import mongoose from "mongoose";

export const Unit = mongoose.model("units", new mongoose.Schema({
    name: String,
    serviceman: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Units"
    },
    position: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Positions"
    }
}))
