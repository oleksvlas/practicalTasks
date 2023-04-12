import {Unit} from "../model/unitModel.js";

export async function getUnits() {
    return Unit.find()
}

export async function create(unit) {
    return Unit.create(unit)
}

export async function getById(id) {
    return Unit.findById(id)
}