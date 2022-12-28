import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";
import Schedule from "../../entities/schedules.entity";
import User from "../../entities/users.entity";
import AppError from "../../Errors/appError";
import { IScheduleRequest } from "../../Interfaces/Schedules";

const scheduleAVisitService = async (data: IScheduleRequest) => {
  const { hour, propertyId, userId, date } = data;
  // console.log(propertyId);

  const splitHour = hour.split(":");

  if (parseInt(splitHour[0]) >= 18 || parseInt(splitHour[0]) < 8) {
    throw new AppError("Invalid Hour", 400);
  }

  const propertiesRepository = AppDataSource.getRepository(Property);
  const scheduleRepository = AppDataSource.getRepository(Schedule);

  const getDay = new Date(date).getDay();
  if (getDay === 0 || getDay === 6) {
    throw new AppError("date invalided!", 400);
  }

  const foundProperties = await propertiesRepository.findOne({
    where: { id: propertyId },
    relations: { category: true },
  });
  if (!foundProperties) {
    throw new AppError("Invalid Property Id", 404);
  }

  const userRepository = AppDataSource.getRepository(User);
  const userExists = await userRepository.findOneBy({
    id: userId,
  });
  if (!userExists) {
    throw new AppError("Invalid User Id", 404);
  }

  const schedulesAlreadyExistsProperty = await scheduleRepository
    .createQueryBuilder("schedules_users_properties")
    .where("schedules_users_properties.property = :id", { id: propertyId })
    .andWhere("schedules_users_properties.date = :date", { date: date })
    .andWhere("schedules_users_properties.hour = :hour", { hour: hour })
    .getOne();

  if (schedulesAlreadyExistsProperty) {
    throw new AppError("Schedules Already Exists", 409);
  }

  const schedulesAlreadyExistsUser = await scheduleRepository
    .createQueryBuilder("schedules_users_properties")
    .where("schedules_users_properties.user = :id", { id: userId })
    .andWhere("schedules_users_properties.date = :date", { date: date })
    .andWhere("schedules_users_properties.hour = :hour", { hour: hour })
    .getOne();

  if (schedulesAlreadyExistsUser) {
    throw new AppError("User Already Exists", 409);
  }

  const createSchedules = scheduleRepository.create({
    date,
    hour,
    property: foundProperties,
    user: userExists,
  });
  await scheduleRepository.save(createSchedules);

  return { message: "Schedule created" };
};

export default scheduleAVisitService;
