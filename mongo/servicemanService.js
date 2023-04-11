import {Serviceman} from "./servicemanModel.js";

export async function getServicemenData() {
    return Serviceman.find();
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