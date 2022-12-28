import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entity";
import AppError from "../../Errors/appError";

const verifyAndReturnCategory = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOneBy({
    id: id
  });

  if (!category) {
    throw new AppError("Invalid Category ID", 404);
  }

  return category;
};

export default verifyAndReturnCategory;
