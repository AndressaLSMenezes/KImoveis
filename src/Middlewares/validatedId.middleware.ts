import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/users.entity";
import AppError from "../Errors/appError";

const validatedIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = (await userRepo.findOneBy({ id: req.params.id })) as User;

  if (!user) {
    throw new AppError("User not exist", 404);
  }
  return next();
};

export default validatedIdMiddleware;
