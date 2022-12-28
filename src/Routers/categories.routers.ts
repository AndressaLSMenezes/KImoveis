import { Router } from "express";
import {
  createCategoryControllers,
  listCategoriesControllers,
  listPropertiesByCategoryControllers,
} from "../Controllers/categories.controllers";
import ensureAuthMiddleware from "../Middlewares/ensureAuth.middleware";
import verifyCategoryIdMiddleware from "../Middlewares/verifyCategoryId.middleware";

import verifyIsAdmMiddleware from "../Middlewares/verifyIsAdm.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  createCategoryControllers
);
categoriesRouter.get("", listCategoriesControllers);

categoriesRouter.get(
  "/:id/properties",
  verifyCategoryIdMiddleware,
  listPropertiesByCategoryControllers
);

export default categoriesRouter;
