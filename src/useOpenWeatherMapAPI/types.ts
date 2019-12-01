import {
  ACTION_REQUEST_PENDING,
  ACTION_REQUEST_FULFILLED,
  ACTION_REQUEST_REJECTED
} from "./constants";
import { IWeatherData, IWeatherError } from "./interfaces";

export type RequestWeatherDataActionType = {
  type: typeof ACTION_REQUEST_PENDING;
};

export type SetWeatherDataActionType = {
  type: typeof ACTION_REQUEST_FULFILLED;
  payload: IWeatherData;
};

export type SetWeatherErrorActionType = {
  type: typeof ACTION_REQUEST_REJECTED;
  payload: IWeatherError;
};

export type ActionTypes =
  | RequestWeatherDataActionType
  | SetWeatherDataActionType
  | SetWeatherErrorActionType;

export type QueryParamsType = {
  cityName?: string;
  id?: number;
  zipCode?: number;
  countryCode?: string;
  lon?: number;
  lat?: number;
};

export type QueryByType = "name" | "id" | "geo" | "zip";

export type QueryUnitsType = "metric" | "imperial";

export type QueryParamObjectEntry = string[][];

export type QueryParamTransformMethodDictType = {
  [key: string]: (params: QueryParamsType) => QueryParamObjectEntry;
};
