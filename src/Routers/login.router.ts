import { Router } from "express";
import { loginUserControllers } from "../Controllers/users.controllers";
import validatedDataMiddleware from "../Middlewares/validatedData.middleware";
import { loginUserSerializer } from "../Serializers/users.serializers";

const loginRouter = Router();

loginRouter.post(
  "",
  validatedDataMiddleware(loginUserSerializer),
  loginUserControllers
);

export default loginRouter;
