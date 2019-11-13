"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../configuracion/sequelize");
exports.getPabellon = (req, res) => {
    sequelize_1.Pabellon.findAll().then((objPabellones) => {
        res.status(200).json({
            message: 'ok',
            contenido: objPabellones
        });
    });
};
exports.postPabellon = (req, res) => {
    //Validando si el req.body cumple con los parametros minimos de entrada
    if (!req.body.pab_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "ERROR EN LOS PARAMETROS DE ENTRADA"
        });
        return;
    }
    // let objPabellon=Pabellon.build({
    //     pab_nom: req.body.pab_nom
    // });
    // console.log(objPabellon);
    //ó
    //creamos una instancia de la clase o modelo 
    //pabellon
    let objPabellon = sequelize_1.Pabellon.build(req.body);
    //guardando el objeto Pabellon en la base de Datos 
    objPabellon.save().then((objetoPabellonCreado) => {
        //CODIGOS DE ESTADO DE HTTP
        //201 RECURSO CREADO
        res.status(201).json({
            ok: true,
            contenido: objetoPabellonCreado,
            mensaje: "PABELLON CREADO CORRECTAMENTE"
        });
    }).catch((errorsh) => {
        res.status(500).json({
            ok: false,
            mensaje: "ERROR INTERNO DEL SERVIDOR",
            contenido: errorsh
        });
    });
};
exports.getPabellonById = (req, res) => {
    sequelize_1.Pabellon.findByPk(req.params.id).then((objPabellon) => {
        if (objPabellon) {
            res.status(200).json({
                message: 'ok',
                pabellon: objPabellon
            });
        }
        else {
            res.status(500).json({
                message: 'error',
                contenido: 'NO SE ENCONTRO EL PABELLON'
            });
        }
    });
};
exports.updatePabellon = (req, res) => {
    sequelize_1.Pabellon.update({
        pab_nom: req.body.pabellon.pab_nom
    }, {
        where: {
            pab_id: req.body.pabellon.pab_id
        }
    }).then((pabActualizado) => {
        sequelize_1.Pabellon.findByPk(pabActualizado[0]).then((objPabellon) => {
            res.status(200).json({
                message: 'ok',
                contenido: objPabellon
            });
        });
    }).catch((error) => {
        res.status(501).json({
            message: 'error',
            contenido: error
        });
    });
};
exports.getAulasXPabellon = (req, res) => {
    sequelize_1.Pabellon.findAll({
        include: [{
                model: sequelize_1.Aula
            }]
    }).then((resultado) => {
        res.status(200).json({
            message: 'ok',
            contenido: resultado
        });
    });
};
exports.getAulasByPabellonId = (req, res) => {
    sequelize_1.Pabellon.findAll({
        where: {
            pab_id: req.params.id
        },
        include: [{
                model: sequelize_1.Aula,
                include: [{
                        model: sequelize_1.TipoAula
                    }]
            }]
    }).then((resultado) => {
        res.status(200).json({
            message: 'ok',
            contenido: resultado
        });
    });
};
