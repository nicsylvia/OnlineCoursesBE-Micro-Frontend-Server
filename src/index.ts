import express, { Application } from "express";
import { MainAppConfig } from "./MainApp";
import { DataBaseConnection } from "./Config/Database";

const port: number = 1105;

const app: Application = express();
MainAppConfig(app);
DataBaseConnection();

app.listen(port, () => {
  console.log("");
  console.log("Server is listening on port", port);
});
