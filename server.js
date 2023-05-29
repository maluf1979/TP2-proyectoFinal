
import express from "express"
const app=express()

import router from "./routes/routes.js"
app.use(router)

app.listen(8080, () =>{
    console.log("server con express ok http://localhost:8080");
})