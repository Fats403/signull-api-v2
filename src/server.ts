import config from "./config";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const { HOST, PORT } = config;

let routes = require("./routes");
routes.setup(app);

// pass app to routes to handle
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on http://${HOST}:${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
