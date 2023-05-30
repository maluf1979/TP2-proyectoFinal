import express from "express";
const app = express();

import router from "./routes/routes.js";
app.use(router);

import coneccionDb from "./connecctionDb/coneccionDb.js";
import "dotenv/config.js";
//import Usuario from "./Models/Usuario.js"

const port = process.env.SERVER_PORT;

await coneccionDb.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log("server con express ok http://localhost:8080");
  });
});
