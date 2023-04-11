import {db} from "./postgresqlDb.js";

export async function getServicemenData() {
    let servicemen = []
    let servicemenDb = await db.servicemen.findAll()

    servicemenDb.forEach(serviceman => servicemen.push(serviceman.dataValues))
    return servicemen
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