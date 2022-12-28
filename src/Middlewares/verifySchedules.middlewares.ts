import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/properties.entity";
import Schedule from "../entities/schedules.entity";
import AppError from "../Errors/appError";

const verifySchedulesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const propertiesRepository = AppDataSource.getRepository(Property);

  const scheduleRepository = AppDataSource.getRepository(Schedule);

  const { hour, date, propertyId } = req.body;
  const splitHour = hour.split(":");

  if (parseInt(splitHour[0]) >= 18 || parseInt(splitHour[0]) < 8) {
    throw new AppError("Invalid Hour", 400);
  }
//   console.log(propertyId);
  

  const schedulesAlreadyExists = await scheduleRepository
    .createQueryBuilder("schedules_users_properties")
    .where("schedules_users_properties.property = :id", { id: propertyId })
    .andWhere("schedules_user_properties.date = :date", { date: date })
    .andWhere("schedules_user_properties.hour = :hour", { hour: hour })
    .getOne();

  if (schedulesAlreadyExists) {
    throw new AppError("Schedules Already Exists", 409);
  }

  return next();
};

export default verifySchedulesMiddleware;
