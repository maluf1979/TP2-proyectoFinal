import express from "express";
import UserController from "../Controllers/UserController.js";
import { validarLogin, validarRol } from "../middlewares/index.js";


const router = express.Router()

const userController = new  UserController()

router.post("/login", userController.login)
router.post("/", userController.createUser)

router.use(validarLogin)
router.get("/me", userController.me)
router.post("/logout", userController.logout)
router.get("/:id", userController.getUserById)

router.use(validarRol)
router.get("/", userController.getAllUsers)
router.put("/:id", userController.updateUserById)
router.delete("/:id", userController.deleteUserById)

export default router