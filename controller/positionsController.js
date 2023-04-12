import {
    create as createPositionPostgresql,
    getById as getPositionByIdPostgresql,
    update as updatePositionPostgresql
} from '../postgres/service/positionService.js'

import {
    create as createPositionMongoDb,
    getById as getPositionByIdMongoDb,
    update as updatePositionMongoDb
} from '../mongo/service/positionService.js'

import {
    getById as getUnitByIdPostgresql
} from '../postgres/service/unitService.js'

import {
    getById as getUnitByIdMongoDb
} from '../mongo/service/unitService.js'
import {getServicemanById as getServicemanByIdMongoDb} from "../mongo/service/servicemanService.js";
import {getServicemanById as getServicemanByIdPostgresql} from "../postgres/service/servicemanService.js";

export class PositionsController{
    static async create(req, res, next) {
        const name = req.body.name

        const unitId = req.params.unitId
        const type = req.params.type

        let position = {
            name: name,
        }


        switch (type) {
            case "postgresql":
                position.unitId = unitId
                await createPositionPostgresql(position)
                break;
            case "mongodb":
                position.unit = await getUnitByIdMongoDb(unitId)
                await createPositionMongoDb(position)
                break;
        }


        res.redirect('/unit/' + unitId + "/type/" + type)
    }

    static async addServiceman(req, res, next) {
        const type = req.params.type
        const positionId = req.params.id

        const userId = req.body.serviceman

        let position = {}
        let serviceman = {}
        switch (type) {
            case "postgresql":
                position = await getPositionByIdPostgresql(positionId)
                position = position.dataValues

                serviceman = await getServicemanByIdPostgresql(userId)
                serviceman = serviceman.dataValues

                if (serviceman !== null) {
                    position.servicemenId = serviceman.id
                }

                position = await updatePositionPostgresql(position)
                break;
            case "mongodb":
                position = await getPositionByIdMongoDb(positionId);

                serviceman = await getServicemanByIdMongoDb(userId)
                if (serviceman !== null) {
                    position[0].serviceman = serviceman
                }

                position = await createPositionMongoDb(position[0])
                break;
        }

        res.redirect('/serviceman')
    }
}