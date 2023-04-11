import {getServicemenData as getServicemenDataPostgresql, saveServiceman as saveServicemanPostgresql} from "../postgres/servicemanService.js";
import {getServicemenData as getServicemenDataMongoDb, saveServiceman as saveServicemanMongoDb} from "../mongo/servicemanService.js";

export class ServicemanController {
    static async findAll(req, res, next) {
        const postgresData = await getServicemenDataPostgresql()
        const mongoDbData = await getServicemenDataMongoDb()

        res.render('main.ejs', {
            servicemenPostgresql: postgresData,
            servicemenMongoDb: mongoDbData
        })
    }

    static create(req, res, next) {
        res.render('create.ejs')
    }

    static createNewServiceman(req, res, next) {
        let serviceman = req.body;
        saveServicemanPostgresql(serviceman)
            .then(servicemanDb => {
                console.log("Saved postgresql")
            })

        saveServicemanMongoDb(serviceman)
            .then(servicemanDb => {
                console.log("Saved mongodb")
            })


        res.redirect('/serviceman')
    }
}