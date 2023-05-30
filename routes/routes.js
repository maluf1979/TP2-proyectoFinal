import express from "express"
import paqueteRouter from "./paqueteRoutes.js"
import usuarioRouter from "./usuarioRoutes.js"
import Models from "../Models/index.js"

const router = express.Router()

router.use("/paquetes" , paqueteRouter)
router.use("/usuarios" , usuarioRouter)

export default router