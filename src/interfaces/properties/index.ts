import { IScheduleResponse } from "../Schedules";

export interface IAddressResponse {
  id: string;
  district: string;
  zipCode: string;
  number?: string;
  city: string;
  state: string;
}

export interface IAddressRequest {
  district: string;
  zipCode: string;
  number?: string;
  city: string;
  state: string;
}

export interface IPropertyRequest {
  value: number;
  size: number;
  address: IAddressRequest;
  categoryId: string;
}

export interface IPropertyResponse {
  value: number;
  size: number;
  address: IAddressResponse;
  categoryId: string;
  schedules?: IScheduleResponse;
}
