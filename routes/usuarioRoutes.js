import express from "express";
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("get all usuarios andando")
})

router.get("/:id", (req, res) =>{
    res.send("get usuario por id")
})

router.post("/", (req, res) =>{
    res.send("creacion de usuario")
})

router.put("/:id", (req,res) =>{
    res.send("modificacion de usuario")
})

router.delete("/:id", (req,res) =>{
    res.send("eliminacion de usuario")
})

export default router