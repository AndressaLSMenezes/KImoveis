import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";
import Schedule from "../../entities/schedules.entity";
import User from "../../entities/users.entity";
import AppError from "../../Errors/appError";

const listAllScheduleByPropertiesIdService = async (
  propertyId: string,
  userId: string
) => {
  const propertiesRepository = AppDataSource.getRepository(Property);

  const foundProperties = await propertiesRepository.findOne({
    where: { id: propertyId },
    relations: { category: true, address: true, schedules: { user: true } },
  });

  const foundSchedules = await propertiesRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.address", "addresses")
    .innerJoinAndSelect("properties.category", "categories")
    .innerJoinAndSelect("properties.schedules", "schedules_users_properties")
    .innerJoinAndSelect("schedules_users_properties.user", "users")
    .where("properties.id = :id", { id: propertyId })
    .getOne();

  // .leftJoinAndSelect("properties.schedules", "schedules_users_properties")
  // .where("properties.id = :id", { id: foundProperties?.id })
  // .getOne();
  console.log(foundSchedules);

  return foundSchedules;
};

export default listAllScheduleByPropertiesIdService;
