import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { IUserUpdate } from "../../Interfaces/Users";
import { userWithoutPasswordSerializer } from "../../Serializers/users.serializers";

const updateUserService = async (data: IUserUpdate, userId: string) => {
  const userRepo = AppDataSource.getRepository(User);

  if (data.password) {
    const { password } = data;
    await userRepo.update(userId, {
      ...data,
      password: await hash(password, 10),
    });
  } else {
    await userRepo.update(userId, {
      ...data,
    });
  }

  const user = await userRepo.findOneBy({ id: userId });
  const updateUserWithoutPassword =
    await userWithoutPasswordSerializer.validate(user, {
      stripUnknown: true,
    });

  return updateUserWithoutPassword;
};

export default updateUserService;
