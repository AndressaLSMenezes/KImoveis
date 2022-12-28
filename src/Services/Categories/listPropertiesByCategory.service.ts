import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";

const listPropertiesByCategoryService = async (
  categoryId: string,
  category: object
) => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const listproperties = await propertyRepository.find({
    where: { categoryId: categoryId },
  });

  const returnedData = {
    ...category,
    properties: listproperties,
  };

  return returnedData;
};

export default listPropertiesByCategoryService;
