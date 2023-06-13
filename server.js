import express from "express";
import router from "./routes/routes.js";
import coneccionDb from "./connecctionDb/coneccionDb.js";
import cors from "cors";
import roleSeed from "./seed/roleSeed.js";

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

await coneccionDb.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("server con express ok http://localhost:8080");
  });
}).then(roleSeed);





