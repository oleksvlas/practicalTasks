import {Serviceman} from "../model/servicemanModel.js";
import {Unit} from "../model/unitModel.js";
import {getPositionByServicemanId} from './positionService.js'

export async function getServicemenData() {
    return Serviceman.find();
}

export async function getServicemanById(id) {
    return Serviceman.findById(id)
}


export async function saveServiceman(serviceman) {
    return await Serviceman.create({
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

        if (position.length === 0) {
            freeServicemen.push(serviceman)
        }
    }

    return freeServicemen
}