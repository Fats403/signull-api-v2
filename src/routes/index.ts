import { Application } from "express";
import { getPing } from "../controllers/ping/get-ping";
import { getName } from "../controllers/name/get-name";

// middlewares

export const setup = (app: Application) => {
  app.get("/ping", getPing);
  app.get("/name", getName);
};
