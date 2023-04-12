import {db} from "../postgresqlDb.js";
import {getPositionByServicemanId} from "../../postgres/service/positionService.js";

export async function getServicemenData() {
    let servicemen = []
    let servicemenDb = await db.servicemen.findAll()

    servicemenDb.forEach(serviceman => servicemen.push(serviceman.dataValues))
    return servicemen
}

export async function getServicemanById(id) {
    return db.servicemen.findByPk(id);
}

export async function saveServiceman(serviceman) {
    return await db.servicemen.create({
        name: serviceman.name,
        surname: serviceman.surname,
        thirdName: serviceman.thirdName,
        rank: serviceman.rank,
        dateOfBirth: serviceman.dateOfBirth,
    })
}

export async function getFreeServicemen() {
    let servicemen = await getServicemenData()
    let freeServicemen = []

    for (let i = 0; i < servicemen.length; i++) {
        let serviceman = servicemen[i]
        let position = await getPositionByServicemanId(serviceman.id)

        if (position === null) {
            freeServicemen.push(serviceman)
        }
    }

    return freeServicemen
}