import { Request, Response } from "express";
import { Name } from "./schema";

export const getName = (req: Request, res: Response) => {
  const { name } = req.query;
  //pass it req and get out validated data
  res.send(`Hello ${name}`);
};
