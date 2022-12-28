import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entity";
import AppError from "../../Errors/appError";
import {
  ICategoryRequest,
  ICategoryResponse,
} from "../../Interfaces/Categories";

const createCategoryService = async (
  data: ICategoryRequest
): Promise<ICategoryResponse> => {
  const { name } = data;
  const categoryRepository = AppDataSource.getRepository(Category);

  const verifyCategoryExists = await categoryRepository.findOneBy({
    name: name,
  });

  if (verifyCategoryExists) {
    throw new AppError("Category already exists", 409);
  }

  const createdProperty = categoryRepository.create(data);
  const returned = await categoryRepository.save(createdProperty);
  return returned;
};

export default createCategoryService;
