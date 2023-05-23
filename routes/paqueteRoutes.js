import express from "express"

const router = express.Router()

router.get("/", (req, res) =>{
    res.send("get all paquetes andando")
})

router.get("/:id", (req, res) =>{
    res.send("get paquete por id")
})

router.post("/", (req, res) =>{
    res.send("creacion de paquete")
})

router.put("/:id", (req,res) =>{
    res.send("modificacion de paquete")
})

router.delete("/:id", (req,res) =>{
    res.send("eliminacion de paquete")
})

export default router