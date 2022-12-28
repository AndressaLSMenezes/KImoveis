import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../Interfaces/Properties";

const createPropertySerializer: SchemaOf<IPropertyRequest> = yup
  .object()
  .shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: yup
      .object()
      .shape({
        district: yup.string().required(),
        zipCode: yup.string().required(),
        number: yup.string(),
        city: yup.string().required(),
        state: yup.string().required(),
      })
      .required(),
    categoryId: yup.string().required()
  });

export default createPropertySerializer;
