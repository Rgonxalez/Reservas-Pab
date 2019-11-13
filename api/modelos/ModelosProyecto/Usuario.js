"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO USUARIO
const sequelize_1 = require("sequelize");
exports.usuario_model = (sequelize) => {
    let usuario = sequelize.define('t_usuario', {
        usuario_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        usu_salt: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        usu_hash: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        usu_tipo: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tableName: 't_usuario',
        timestamps: true
    });
    return usuario;
};
