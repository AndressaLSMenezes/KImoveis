import { Request, Response } from "express";
import listAllScheduleByPropertiesIdService from "../Services/Schedules/listAllScheduleByPropertiesId.service";
import scheduleAVisitService from "../Services/Schedules/scheduleAVisit.service";

const scheduleAVisitController = async (req: Request, res: Response) => {
  const data = await scheduleAVisitService(req.body);
  return res.status(201).send(data);
};

const listAllScheduleByPropertiesIdController = async (
  req: Request,
  res: Response
) => {
  const data = await listAllScheduleByPropertiesIdService(
    req.params.id,
    req.body.user.id
  );
  return res.status(200).send(data);
};

export { scheduleAVisitController, listAllScheduleByPropertiesIdController };
