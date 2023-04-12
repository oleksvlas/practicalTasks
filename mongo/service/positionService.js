import {Position} from "../model/positionModel.js";

export async function getPositionByUnitId(id) {
    return Position.find({'unit': id})
}

export async function create(position) {
    return Position.create(position)
}

export async function getPositionByServicemanId(id) {
    return Position.find({'serviceman': id})
}

export async function getById(id) {
    return Position.find({'_id': id})
}

export async function update(id, position) {
    return Position.update(id, position)
}