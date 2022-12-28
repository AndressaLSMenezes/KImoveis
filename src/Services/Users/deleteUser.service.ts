import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../Errors/appError";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.find({
    where: { id: userId },
    withDeleted: true,
  });

  if (!user[0].isActive) {
    throw new AppError("User already delete", 400);
  }

  await userRepo.softDelete(user[0].id);
  await userRepo.save({ ...user[0], isActive: false });
};

export default deleteUserService;
