import {db} from "../postgresqlDb.js";

export async function getUnits() {
    return db.units.findAll()
}

export async function create(unit) {
    return db.units.create(unit)
}

export async function getById(id) {
    return db.units.findByPk(id)
}