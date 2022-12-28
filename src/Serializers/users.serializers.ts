import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUser,
  IUserRequest,
  IUserLogin,
  IUserUpdate,
  IUserUpdateResponse,
} from "../Interfaces/Users";

const createUserSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const loginUserSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  isAdm: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  isActive: yup.boolean().required(),
});

const listUserWithoutPasswordSerializer: SchemaOf<IUser[]> = yup.array(
  userWithoutPasswordSerializer
);

const updateUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
});

const updateUserResponseSerializer: SchemaOf<IUserUpdateResponse> = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string().email(),
  });

export {
  createUserSerializer,
  loginUserSerializer,
  userWithoutPasswordSerializer,
  updateUserSerializer,
  updateUserResponseSerializer,
  listUserWithoutPasswordSerializer,
};
