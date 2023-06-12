import express from "express";
import UserController from "../Controllers/UserController.js";

const router = express.Router()

const userController = new  UserController()

router.get("/", userController.getAllUsers)

router.get("/:id", userController.getUserById)

router.post("/", userController.createUser)

router.put("/:id", userController.updateUserById)

router.delete("/:id", userController.deleteUserById)

export default router