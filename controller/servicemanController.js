import {
    getServicemenData as getServicemenDataPostgresql,
    saveServiceman as saveServicemanPostgresql,
    getServicemanById as getServicemanByIdPostgresql,
} from "../postgres/service/servicemanService.js";
import {
    getServicemenData as getServicemenDataMongoDb,
    saveServiceman as saveServicemanMongoDb,
    getServicemanById as getServicemanByIdMongoDb,
} from "../mongo/service/servicemanService.js";

import {
    getUnits as getUnitsMongoDb
} from "../mongo/service/unitService.js";

import {
    getUnits as getUnitsPostgresql
} from "../postgres/service/unitService.js";

export class ServicemanController {
    static error(req, res, next) {
        res.render('error.ejs')
    }

    static async findAll(req, res, next) {
        const postgresData = await getServicemenDataPostgresql()
        const mongoDbData = await getServicemenDataMongoDb()

        const unitsMongoDb = await getUnitsMongoDb()
        const unitsPostgresql = await getUnitsPostgresql()

        res.render('main.ejs', {
            servicemenPostgresql: postgresData,
            servicemenMongoDb: mongoDbData,

            unitsMongoDb: unitsMongoDb,
            unitsPostgresql: unitsPostgresql,
        })
    }

    static async findById(req, res, next) {
        const params = req.params;

        let type = params.type
        let id = params.id

        let serviceman = {}

        switch (type) {
            case "postgresql":
                serviceman = await getServicemanByIdPostgresql(id)
                break;
            case "mongodb":
                serviceman = await getServicemanByIdMongoDb(id)
                break;
            default:
                res.redirect('/error')
                return
        }

        res.render('serviceman.ejs', {
            serviceman: serviceman,
            type: type
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