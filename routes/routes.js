import express from "express"
import paqueteRouter from "./paqueteRoutes.js"
import usuarioRouter from "./usuarioRoutes.js"
import UsuarioPaqueteRouter from "./UsuarioPaqueteRoutes.js"
import RoleRouter from "./roleRoutes.js"



const router = express.Router()

router.use("/paquetes" , paqueteRouter)
router.use("/usuarios" , usuarioRouter)
router.use("/usuarioPaquete", UsuarioPaqueteRouter)
router.use("/roles", RoleRouter)

export default router