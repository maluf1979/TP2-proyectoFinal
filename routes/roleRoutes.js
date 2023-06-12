import RoleController from "../Controllers/RoleController.js"
import express from "express"

const roleController = new RoleController();

const router = express.Router()

export default router