import express from "express";
import router from "./routes/routes.js";
import coneccionDb from "./connecctionDb/coneccionDb.js";

const app = express();
app.use(router);

const port = process.env.SERVER_PORT;

await coneccionDb.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("server con express ok http://localhost:8080");
  });
});





