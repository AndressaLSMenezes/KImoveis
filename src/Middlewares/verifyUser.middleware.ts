import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/users.entity";
import AppError from "../Errors/appError";

const verifyUserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const userRepository = AppDataSource.getRepository(User);

  const verifyEmailExists = await userRepository.findOneBy({ email: email });

  if (verifyEmailExists) {
    throw new AppError("User already exists", 401);
  }

  return next();
};

export default verifyUserExistMiddleware;
