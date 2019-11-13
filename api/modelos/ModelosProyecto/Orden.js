"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO ORDEN
const sequelize_1 = require("sequelize");
exports.orden_model = (sequelize) => {
    let orden = sequelize.define('t_orden', {
        orde_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        orde_total: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        orde_estado: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        orde_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 't_orden',
        timestamps: true
    });
    return orden;
};
