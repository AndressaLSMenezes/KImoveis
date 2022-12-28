import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validatedDataMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validated;
      return next();
    } catch (error: any) {
      return res.status(400).json({
        error: error.errors,
      });
    }
  };

export default validatedDataMiddleware;
