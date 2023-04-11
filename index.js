import express from 'express'
import {servicemanRoute} from "./routes/servicemanRoute.js";
import bodyParser from "body-parser";

import {mongoDb} from "./mongo/mongoDb.js";

const port = 5000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views engine', 'ejs')
app.set('views', './views')

app.use('/serviceman', servicemanRoute)

app.listen(port, () => {
    console.log(`Server started ${port}`)
})


