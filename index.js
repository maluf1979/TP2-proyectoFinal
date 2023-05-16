
import express from "express"
const app=express()

import routerPaquetes from "./paquetesTuristicos/index.js"
app.use(routerPaquetes)

import routerUsuarios from "./usuarios/index.js"
app.use(routerUsuarios)

app.listen(8080, () =>{
    console.log("server con express ok http://localhost:8080");
})