import PaqueteController from "../Controllers/PaquetesController.js"
import express from "express"

const paquetesController = new PaqueteController();

const router = express.Router()

router.get("/", paquetesController.getAllPaquetes)

router.get("/:id", paquetesController.getPaqueteById)

router.post("/", paquetesController.createPaquetes)

router.put("/:id", paquetesController.updatePaqueteById)

router.delete("/:id", paquetesController.deletePaqueteById)

export default router