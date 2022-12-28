import { Request, Response, NextFunction } from "express";
import AppError from "../Errors/appError";

const handleAppError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error.message.includes("invalid input syntax for type")) {
    return res.status(404).json({ message: error.message });
  }

  console.log(error.message);

  return res.status(500).json({
    message: "internal server error",
  });
};

export default handleAppError;
