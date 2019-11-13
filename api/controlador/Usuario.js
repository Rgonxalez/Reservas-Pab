"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../configuracion/sequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op; //Los operadores de comparacion de sequelize
exports.crearUsuario = (req, res) => {
    //build construye el objeto Usuario mas no lo crea en la Base de Datos 
    let objUsuario = sequelize_1.Usuario.build(req.body.usuario);
    objUsuario.setSaltYHash(req.body.usuario.usu_pass);
    //save()=> promesa que guarda el registro en la Base de Datos
    objUsuario.save().then((usuarioCreado) => {
        sequelize_1.Usuario.findByPk(usuarioCreado.usu_id).then((usuarioEncontrado) => {
            res.status(201).json({
                message: "Usuario creado",
                content: usuarioEncontrado
            });
        });
    }).catch((error) => {
        console.log(error);
        res.status(501).json({
            message: 'Error',
            content: error
        });
    });
};
exports.encontrarUsuByNomOApe = (req, res) => { };
exports.iniciarSesion = (req, res) => { };
