import mongoose from "mongoose";

export const Position = mongoose.model("positions", new mongoose.Schema({
    name: String,
    serviceman: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "servicemen"
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "units"
    }
}))

