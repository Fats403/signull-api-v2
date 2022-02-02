import { Request, Response } from "express";

export const getPing = (req: Request, res: Response) => res.sendStatus(200);
