import { Request, Response, NextFunction } from "express";
import AppError from "../Errors/appError";

const verifyDataUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const blockedParams = Object.keys(req.body).some(
    (e) => e == "isAdm" || e == "isActive" || e == "id"
  );

  if (blockedParams) {
    throw new AppError("Not authorization", 401);
  }
  return next();
};

export default verifyDataUpdateMiddleware;
