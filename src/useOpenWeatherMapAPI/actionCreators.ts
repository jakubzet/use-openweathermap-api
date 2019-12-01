import {
  ACTION_REQUEST_PENDING,
  ACTION_REQUEST_FULFILLED,
  ACTION_REQUEST_REJECTED
} from "./constants";
import { IWeatherData, IWeatherError } from "./interfaces";
import {
  RequestWeatherDataActionType,
  SetWeatherDataActionType,
  SetWeatherErrorActionType
} from "./types";

/**
 * requestWeatherData
 *
 * @export
 * @returns {RequestWeatherDataActionType}
 */
export function requestWeatherData(): RequestWeatherDataActionType {
  return {
    type: ACTION_REQUEST_PENDING
  };
}

/**
 * setWeatherData
 *
 * @export
 * @param {IWeatherData} weatherDetails
 * @returns {SetWeatherDataActionType}
 */
export function setWeatherData(
  weatherDetails: IWeatherData
): SetWeatherDataActionType {
  return {
    type: ACTION_REQUEST_FULFILLED,
    payload: weatherDetails
  };
}

/**
 * setWeatherError
 *
 * @export
 * @param {IWeatherError} errorDetails
 * @returns {SetWeatherErrorActionType}
 */
export function setWeatherError(
  errorDetails: IWeatherError
): SetWeatherErrorActionType {
  return {
    type: ACTION_REQUEST_REJECTED,
    payload: errorDetails
  };
}
