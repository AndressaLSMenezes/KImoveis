import AppDataSource from "../../data-source";
import Address from "../../entities/addresses.entity";
import AppError from "../../Errors/appError";
import { IAddressRequest, IAddressResponse } from "../../Interfaces/Properties";
import createAddressSerializer from "../../Serializers/addresses.serializer";

const registerAddressService = async (
  data: IAddressRequest
): Promise<IAddressResponse> => {
  const addressRepository = AppDataSource.getRepository(Address);

  if (data.state.length != 2) {
    throw new AppError("Invalid State", 400);
  }

  if (data.zipCode.length != 8) {
    throw new AppError("Invalid State", 400);
  }

  const createAddress = addressRepository.create(data);
  const address = await addressRepository.save(createAddress);

  const returned = await createAddressSerializer.validate(address);

  return returned;
};

export default registerAddressService;
