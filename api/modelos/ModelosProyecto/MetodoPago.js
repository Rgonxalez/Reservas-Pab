"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO METODOPAGO
const sequelize_1 = require("sequelize");
exports.metodopago_model = (sequelize) => {
    let metodopago = sequelize.define('t_metodopago', {
        mpago_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        mpago_nom: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 't_metodopago',
        timestamps: true
    });
    return metodopago;
};
