import { Request, Response } from "express";
import createCategoryService from "../Services/Categories/createCategory.service";
import listCategoriesService from "../Services/Categories/listCategories.service";
import listPropertiesByCategoryService from "../Services/Categories/listPropertiesByCategory.service";

const createCategoryControllers = async (req: Request, res: Response) => {
  const data = await createCategoryService(req.body);
  return res.status(201).send(data);
};

const listCategoriesControllers = async (req: Request, res: Response) => {
  const data = await listCategoriesService();
  return res.status(200).send(data);
};

const listPropertiesByCategoryControllers = async (
  req: Request,
  res: Response
) => {
  const data = await listPropertiesByCategoryService(req.params.id, req.body.category);
  return res.status(200).send(data);
};

export {
  createCategoryControllers,
  listCategoriesControllers,
  listPropertiesByCategoryControllers,
};
