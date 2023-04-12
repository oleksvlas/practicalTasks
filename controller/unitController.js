import {
    create as createUnitPostgresql,
    getById as getUnitByIdPostgresql
} from '../postgres/service/unitService.js'

import {
    create as createUnitMongodb,
    getById as getUnitByIdMongoDb
} from '../mongo/service/unitService.js'

import {
    getPositionByUnitId as getPositionByUnitIdPostgresql
} from '../postgres/service/positionService.js'

import {
    getPositionByUnitId as getPositionByUnitIdMongoDb
} from '../mongo/service/positionService.js'

import {
    getFreeServicemen as getFreeServicemenMongoDb
} from '../mongo/service/servicemanService.js'

import {
    getFreeServicemen as getFreeServicemenPostgresql
} from '../postgres/service/servicemanService.js'


export class UnitController {
    static async create(req, res, next) {
        let unit = req.body
        await createUnitMongodb(unit)
        await createUnitPostgresql(unit)

        res.redirect('/serviceman')
    }

    static async getById(req, res, next) {
        const id = req.params.id
        const type = req.params.type

        let unit = {}
        let positions = {}
        let freeServicemen = []

        switch (type) {
            case "postgresql":
                unit = await getUnitByIdPostgresql(id)
                positions = await getPositionByUnitIdPostgresql(id)
                freeServicemen = await getFreeServicemenPostgresql()
                break;
            case "mongodb":
                unit = await getUnitByIdMongoDb(id)
                positions = await getPositionByUnitIdMongoDb(id)
                freeServicemen = await getFreeServicemenMongoDb()
                break;
            default:
                res.redirect('/error')
                return
        }

        res.render('unit.ejs', {
            unit: unit,
            type: type,
            positions: positions,
            freeServicemen: freeServicemen
        })
    }
}