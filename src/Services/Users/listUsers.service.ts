import AppDataSource from "../../data-source";
import Users from "../../entities/users.entity";
import { IUser } from "../../Interfaces/Users";
import { listUserWithoutPasswordSerializer } from "../../Serializers/users.serializers";

const listUsersServices = async (): Promise<IUser[]> => {
  const users = AppDataSource.getRepository(Users);

  const listUsers = await users.find();

  const listUserWithoutPassword =
    (await listUserWithoutPasswordSerializer.validate(listUsers, {
      stripUnknown: true,
    })) as IUser[];

  return listUserWithoutPassword;
};

export default listUsersServices;
