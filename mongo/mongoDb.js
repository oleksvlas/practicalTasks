import mongoose from "mongoose";

mongoose.connect(process.env.mongoStr, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("MongoDb connected")
}).catch(err => {
    console.log(err)
})

export const mongoDb = mongoose.connection
