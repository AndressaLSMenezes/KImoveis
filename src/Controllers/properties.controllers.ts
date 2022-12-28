import { Request, Response } from "express";
import createPropertiesService from "../Services/Properties/createProperties.service";
import listAllPropertiesService from "../Services/Properties/listAllProperties.service";

const createPropertiesController = async (req: Request, res: Response) => {

  const data = await createPropertiesService(req.body);
  return res.status(201).send(data);
};

const listAllPropertiesController = async (req: Request, res: Response) => {
  const data = await listAllPropertiesService();
  return res.status(200).send(data);
};

export { createPropertiesController, listAllPropertiesController };
