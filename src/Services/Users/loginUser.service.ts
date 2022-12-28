import "dotenv/config";
import { compare } from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../Errors/appError";
import { IUserLogin } from "../../Interfaces/Users";

const loginUserService = async (data: IUserLogin) => {
  const { email, password } = data;
  const userRepository = AppDataSource.getRepository(User);
  const user: User = (await userRepository.findOneBy({ email: email })) as User;

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  if (!user.isActive) {
    throw new AppError("User already delete", 400);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as Secret,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return { token };
};

export default loginUserService;
