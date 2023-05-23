import express from "express"
const router = express.Router()

import paqueteRouter from "./paqueteRoutes.js"
router.use("/paquetes" , paqueteRouter)

import usuarioRouter from "./usuarioRoutes.js"
router.use("/usuarios" , usuarioRouter)

export default router