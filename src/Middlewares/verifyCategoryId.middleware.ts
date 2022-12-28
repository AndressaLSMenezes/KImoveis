import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Category from "../entities/categories.entity";
import AppError from "../Errors/appError";

const verifyCategoryIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryParams = await categoryRepository.findOneBy({
    id: req.params.id,
  });

  if (!categoryParams) {
    throw new AppError("Invalid Category ID", 404);
  }
  req.body.category = categoryParams;

  return next();
};

export default verifyCategoryIdMiddleware;
