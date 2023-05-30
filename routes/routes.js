import express from "express"
const router = express.Router()
import Usuario from "../Models/Usuario.js"

import paqueteRouter from "./paqueteRoutes.js"
router.use("/paquetes" , paqueteRouter)

import usuarioRouter from "./usuarioRoutes.js"
router.use("/usuarios" , usuarioRouter)

export default router