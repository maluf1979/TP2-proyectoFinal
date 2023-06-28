import express from "express";
import router from "./routes/routes.js";
import coneccionDb from "./connecctionDb/coneccionDb.js";
import cors from "cors";
import  { roleSeed, usuarioSeed, paqueteSeed } from "./seed/index.js";
import cookieParser from "cookie-parser";


const app = express();
const port = process.env.SERVER_PORT;

app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ success: false, message: error.message });
});

await coneccionDb.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log("server con express ok http://localhost:8080");
  });
}).then(roleSeed).then(paqueteSeed).then(usuarioSeed);





