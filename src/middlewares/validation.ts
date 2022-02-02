import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export default function (schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { body, query } = req;
    const params = { ...body, ...(query || {}) };
    const { error } = schema.validate(params, {
      allowUnknown: false,
    });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const errorsDetail = details.map((i: any) => i.message);
      return res.status(422).json({
        success: false,
        error: errorsDetail[0],
      });
    }
  };
}
