import { Request, Response } from "express";

import createUserService from "../Services/Users/createUser.service";
import deleteUserService from "../Services/Users/deleteUser.service";
import listUsersServices from "../Services/Users/listUsers.service";
import updateUserService from "../Services/Users/updateUser.service";
import loginUserService from "../Services/Users/loginUser.service";

const createUserControllers = async (req: Request, res: Response) => {
  const data = await createUserService(req.body);
  return res.status(201).send(data);
};

const deleteUserControllers = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);
  return res.status(204).send({});
};

const listUsersControllers = async (req: Request, res: Response) => {
  const data = await listUsersServices();
  return res.status(200).send(data);
};

const updateUserControllers = async (req: Request, res: Response) => {
  const data = await updateUserService(req.body, req.params.id);
  return res.status(200).send(data);
};

const loginUserControllers = async (req: Request, res: Response) => {
  const data = await loginUserService(req.body);
  return res.status(200).send(data);
};

export {
  createUserControllers,
  deleteUserControllers,
  listUsersControllers,
  updateUserControllers,
  loginUserControllers,
};
