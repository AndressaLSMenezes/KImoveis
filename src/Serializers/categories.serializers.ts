import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICategoryRequest, ICategoryResponse } from "../Interfaces/Categories";

const createCategorySerializer: SchemaOf<ICategoryRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
  });

const createCategoryResponseSerializer: SchemaOf<ICategoryResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
  });

const listCategoriesSerializer: SchemaOf<ICategoryResponse[]> = yup.array(
  createCategoryResponseSerializer
);

export {
  createCategoryResponseSerializer,
  createCategorySerializer,
  listCategoriesSerializer,
};
