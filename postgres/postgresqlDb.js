import {Sequelize} from "sequelize";
import {defineServicemen} from "./servicemanModel.js";
import {defineUnit} from "./unitModel.js";
import {definePosition} from "./positionModel.js";

let dbConfig = {
    USER: 'postgres',
    PASSWORD: '0000',
    HOST: 'localhost',
    DB: 'pz_3.5',
    dialect: 'postgresql',
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

export const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.servicemen = defineServicemen(sequelize)
db.units = defineUnit(sequelize)
db.positions = definePosition(sequelize)

db.servicemen.hasOne(db.positions)
db.positions.belongsTo(db.servicemen)

db.units.hasOne(db.positions)
db.positions.belongsTo(db.units)

db.sequelize.sync({alter: true})
    .then(() => {
        console.log('Postgresql connected')
    })
    .catch(err => {
        console.log(err)
    })
