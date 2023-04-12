import {DataTypes} from "sequelize";

export function defineUnit(sequelize) {
    return sequelize.define("unit", {
        name: {
            type: DataTypes.STRING
        }
    })
}