import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";

const listAllPropertiesService = async () => {

    const propertyRepository = AppDataSource.getRepository(Property);
  
    const listproperty = await propertyRepository.find();
  
    return listproperty;
};

export default listAllPropertiesService;
