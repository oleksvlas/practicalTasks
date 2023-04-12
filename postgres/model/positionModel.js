import {DataTypes} from "sequelize";

export function definePosition(sequelize) {
    return sequelize.define("position", {
        name: {
            type: DataTypes.STRING
        },
    })
}