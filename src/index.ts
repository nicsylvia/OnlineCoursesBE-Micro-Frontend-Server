import express, { Application } from "express";

const port: number = 1105;

const app: Application = express();

app.listen(port, () => {
  console.log("");
  console.log("Server is listening on port", port);
});
