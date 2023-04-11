import {DataTypes} from "sequelize";

export function defineServicemen(sequelize) {
    return sequelize.define("servicemen", {
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        thirdName: {
            type: DataTypes.STRING
        },
        rank: {
            type: DataTypes.STRING
        },
        dateOfBirth: {
            type: DataTypes.DATE
        }
    })
}