import { Router } from "express";
import {
  listAllScheduleByPropertiesIdController,
  scheduleAVisitController,
} from "../Controllers/schedules.controllers";

import ensureAuthMiddleware from "../Middlewares/ensureAuth.middleware";
import validatedDataMiddleware from "../Middlewares/validatedData.middleware";
import validatedPropertyIdMiddleware from "../Middlewares/validatedPropertyId.middlewares";
import verifyIsAdmMiddleware from "../Middlewares/verifyIsAdm.middleware";
import verifySchedulesMiddleware from "../Middlewares/verifySchedules.middlewares";

const schedulesRouter = Router();

schedulesRouter.post(
  "",
  ensureAuthMiddleware,
  // verifySchedulesMiddleware,
  scheduleAVisitController
);
schedulesRouter.get(
  "/properties/:id",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  validatedPropertyIdMiddleware,
  listAllScheduleByPropertiesIdController
);

export default schedulesRouter;
