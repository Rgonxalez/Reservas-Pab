"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aula_1 = require("./../modelos/Aula");
const Pabellon_1 = require("./../modelos/Pabellon");
const tipoAula_1 = require("../modelos/tipoAula");
const usuario_1 = require("../modelos/usuario");
const reserva_1 = require("../modelos/reserva");
const Sequelize = require("sequelize");
exports.conexion = new Sequelize('kQwMS3Hjoe', 'kQwMS3Hjoe', 'yAm5qUKWrS', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    timezone: '-05:00',
    // configuración para lectura de fechas en la base de datos
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }
});
//otra forma de conectarse por Sequelize
// export const conexion2 = new Sequelize('mysql://root:root@localhost:3306/aulas')
exports.Pabellon = Pabellon_1.pabellon_model(exports.conexion);
exports.Aula = Aula_1.aula_model(exports.conexion);
exports.TipoAula = tipoAula_1.tipoaula_model(exports.conexion);
exports.Usuario = usuario_1.usuario_model(exports.conexion);
exports.reserva = reserva_1.reserva_model(exports.conexion);
exports.Pabellon.hasMany(exports.Aula, { foreignKey: "pab_id" });
exports.Aula.belongsTo(exports.Pabellon, { foreignKey: "pab_id" });
//Para crear relacion entre aula y reserva por medio de su FK que se va llamar aula_id
exports.Aula.hasMany(exports.reserva, { foreignKey: "aula_id" });
exports.reserva.belongsTo(exports.Aula, { foreignKey: "aula_id" });
exports.Usuario.hasMany(exports.reserva, { foreignKey: "usu_id" });
exports.reserva.belongsTo(exports.Usuario, { foreignKey: "usu_id" });
//Tipoaula tiene muchas aulas 
exports.TipoAula.hasMany(exports.Aula, { foreignKey: "taula_id" });
//muchas aulas tiene Tipo Aula
exports.Aula.belongsTo(exports.TipoAula, { foreignKey: "taula_id" });
