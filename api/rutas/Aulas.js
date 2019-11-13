"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aula_1 = require("./../controlador/aula");
exports.aulas_router = express_1.Router();
exports.aulas_router.post('/aula', aula_1.postAula);
