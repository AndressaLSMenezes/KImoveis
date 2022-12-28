import { Router } from "express";
import {
  createPropertiesController,
  listAllPropertiesController,
} from "../Controllers/properties.controllers";

import ensureAuthMiddleware from "../Middlewares/ensureAuth.middleware";
import validatedDataMiddleware from "../Middlewares/validatedData.middleware";
import verifyIsAdmMiddleware from "../Middlewares/verifyIsAdm.middleware";
import createPropertySerializer from "../Serializers/properties.serializer";

const propertiesRouter = Router();

propertiesRouter.post(
  "",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  validatedDataMiddleware(createPropertySerializer),
  createPropertiesController
);
propertiesRouter.get("", listAllPropertiesController);

export default propertiesRouter;
