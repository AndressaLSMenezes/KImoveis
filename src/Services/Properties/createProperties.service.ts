import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entity";
import Property from "../../entities/properties.entity";
import AppError from "../../Errors/appError";
import { IPropertyResponse } from "../../Interfaces/Properties";
import registerAddressService from "../Adresses/createAdresss.service";
import verifyAndReturnCategory from "../Categories/VerifyAndReturnCategory.service";

const createPropertiesService = async (data: Property): Promise<Property> => {
  const { value, size, categoryId, address} = data;


  const category = await verifyAndReturnCategory(categoryId)
  const dataAddress = await registerAddressService(address);

  const propertiesRepository = AppDataSource.getRepository(Property);
  const propertyExists = await propertiesRepository.findOneBy({
    address: address,
  });

  if (propertyExists) {
    throw new AppError("Property already exists", 409);
  }

  const createdProperty = propertiesRepository.create({
    value,
    size,
    categoryId,
    address: dataAddress,
    category,
  });
  const returned = await propertiesRepository.save(createdProperty);
  return returned;
};

export default createPropertiesService;
