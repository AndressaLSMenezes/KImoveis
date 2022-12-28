import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entity";
import { ICategoryResponse } from "../../Interfaces/Categories";

import { listCategoriesSerializer } from "../../Serializers/categories.serializers";

const listCategoriesService = async () => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const listCategory = await categoryRepository.find();
  const returned = await listCategoriesSerializer.validate(listCategory);

  return returned;
};

export default listCategoriesService;
