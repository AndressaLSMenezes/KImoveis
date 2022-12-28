import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/properties.entity";
import AppError from "../Errors/appError";


const validatedPropertyIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertyRepository = AppDataSource.getRepository(Property);
  

  const [propertyParams] = await propertyRepository.find({
    where: [
      { id: req.params.id},
      { id: req.body.propertyId }
  ]
  });

  if(!propertyParams) {
    throw new AppError("Property Id invalid", 404)
  }

  return next();
};

export default validatedPropertyIdMiddleware;