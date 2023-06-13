import  UsuarioPaqueteController  from "../Controllers/UsuarioPaqueteController.js";
import express from "express"

const usuarioPaqueteController = new UsuarioPaqueteController();

const router = express.Router()

router.get("/", usuarioPaqueteController.getAllUsuariosPaquetes)

router.get("/:id", usuarioPaqueteController.getUsuarioPaqueteById)

router.post("/", usuarioPaqueteController.createUsuarioPaquete)

router.put("/:id", usuarioPaqueteController.getUsuarioPaqueteById)

router.delete("/:id", usuarioPaqueteController.getUsuarioPaqueteById)

export default router