import { Router } from "express";

import validatedDataMiddleware from "../Middlewares/validatedData.middleware";
import {
  createUserSerializer,
  updateUserSerializer,
} from "../Serializers/users.serializers";

import {
  createUserControllers,
  deleteUserControllers,
  listUsersControllers,
  updateUserControllers,
} from "../Controllers/users.controllers";
import validatedIdMiddleware from "../Middlewares/validatedId.middleware";
import ensureAuthMiddleware from "../Middlewares/ensureAuth.middleware";
import verifyIsAdmMiddleware from "../Middlewares/verifyIsAdm.middleware";
import verifyDataUpdateMiddleware from "../Middlewares/verifyDataUpdate.middleware";

const userRouter = Router();

userRouter.post(
  "",
  validatedDataMiddleware(createUserSerializer),
  createUserControllers
);

userRouter.delete(
  "/:id",
  validatedIdMiddleware,
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  deleteUserControllers
);

userRouter.get(
  "",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  listUsersControllers
);

userRouter.patch(
  "/:id",
  validatedIdMiddleware,
  verifyDataUpdateMiddleware,
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  validatedDataMiddleware(updateUserSerializer),
  updateUserControllers
);

export default userRouter;
