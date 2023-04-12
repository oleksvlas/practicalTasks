import {db} from "../postgresqlDb.js";

export async function getPositionByUnitId(id) {
    let positions = []
    let positionsDb = await db.positions.findAll({
        where: {
            unitId: id
        }
    })

    for (let i = 0; i < positionsDb.length; i++) {
        positions.push(positionsDb[i].dataValues)
    }

    return positions
}

export async function create(position) {
    return db.positions.create(position)
}

export function getById(id) {
    return db.positions.findOne({
        where: {
            id: id
        }
    })
}

export function update(position) {
    return db.positions.update({
            name: position.name,
            unitId: position.unitId,
            servicemenId: position.servicemenId
        },
        {
            where: {
                id: position.id
            }
        })
}

export function getPositionByServicemanId(id) {
    return db.positions.findOne({
        where: {
            servicemenId: id
        }
    })
}