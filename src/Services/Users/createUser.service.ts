import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../Errors/appError";
import { IUserRequest, IUser } from "../../Interfaces/Users";
import { userWithoutPasswordSerializer } from "../../Serializers/users.serializers";

const createUserService = async (data: IUserRequest): Promise<IUser> => {
  const { email } = data;
  const userRepository = AppDataSource.getRepository(User);

  const verifyEmailExists = await userRepository.findOneBy({ email: email });

  if (verifyEmailExists) {
    throw new AppError("User already exists", 409);
  }

  const createdUser = userRepository.create(data);
  await userRepository.save(createdUser);

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    createdUser,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPassword;
};

export default createUserService;
