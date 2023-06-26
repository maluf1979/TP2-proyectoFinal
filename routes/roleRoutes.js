import RoleController from "../Controllers/RoleController.js"
import express from "express"

const roleController = new RoleController();

const router = express.Router()

router.get("/", roleController.getAllRoles)

router.get("/:id", roleController.getRoleById)

router.post("/", roleController.createRole)

router.put("/:id",roleController.updateRoleById )

router.delete("/:id", roleController.deleteRoleById)

export default router