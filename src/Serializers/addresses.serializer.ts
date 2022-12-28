import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressResponse } from "../Interfaces/Properties";

const createAddressSerializer: SchemaOf<IAddressResponse> = yup.object().shape({
  id: yup.string().required(),
  district: yup.string().required(),
  zipCode: yup.string().required(),
  number: yup.string(),
  city: yup.string().required(),
  state: yup.string().required(),
});

export default createAddressSerializer;
