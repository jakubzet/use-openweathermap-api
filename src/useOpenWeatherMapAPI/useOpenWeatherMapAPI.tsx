import * as React from "react";
import fetch from "isomorphic-unfetch";
import {
  API_URL,
  ERROR_MSG_QUERY_CONFIG_MISSING,
  ERROR_MSG_QUERY_TYPE_MISSING,
  ERROR_MSG_QUERY_TRANSFORM_METHOD_MISSING,
  UNKNOWN_ERROR_CODE,
  UNKNOWN_ERROR_MSG
} from "./constants";
import {
  ActionTypes,
  QueryParamsType,
  QueryByType,
  QueryParamObjectEntry,
  QueryParamTransformMethodDictType
} from "./types";
import { IState, IConfig, IParams } from "./interfaces";
import { openWeatherMapAPIReducer } from "./reducers";
import {
  requestWeatherData,
  setWeatherData,
  setWeatherError
} from "./actionCreators";

const initialState: IState = {
  data: undefined,
  pending: false,
  error: undefined
};

const queryTypeToQueryParamEntryTransformMethods: QueryParamTransformMethodDictType = {
  name: (params: QueryParamsType): QueryParamObjectEntry => [
    [
      "q",
      `${params.cityName}${params.countryCode ? `,${params.countryCode}` : ""}`
    ]
  ],

  id: (params: QueryParamsType): QueryParamObjectEntry => [
    ["id", `${params.id}`]
  ],

  geo: (params: QueryParamsType): QueryParamObjectEntry => [
    ["lat", `${params.lat}`],
    ["lon", `${params.lon}`]
  ],

  zip: (params: QueryParamsType): QueryParamObjectEntry => [
    [
      "zip",
      `${params.zipCode}${params.countryCode ? `,${params.countryCode}` : ""}`
    ]
  ]
};

/**
 * createParamsForAPIQuery
 *
 * @export
 * @param {QueryParamTransformMethodDictType} transformMethodsDict
 * @param {QueryParamsType} queryConfig
 * @param {IParams} initialQueryParams
 * @param {QueryByType} queryType
 * @returns {QueryParamObjectEntry}
 */
export function createParamsForAPIQuery(
  transformMethodsDict: QueryParamTransformMethodDictType,
  queryConfig: QueryParamsType,
  initialQueryParams: IParams,
  queryType: QueryByType
): QueryParamObjectEntry {
  if (!queryConfig) {
    throw new Error(ERROR_MSG_QUERY_CONFIG_MISSING);
  }

  if (!queryType) {
    throw new Error(ERROR_MSG_QUERY_TYPE_MISSING);
  }

  if (!transformMethodsDict[queryType]) {
    throw new Error(ERROR_MSG_QUERY_TRANSFORM_METHOD_MISSING);
  }

  const transformMethod = transformMethodsDict[queryType];
  const queryConfigParamEntries = transformMethod(queryConfig);
  const initialQueryParamEntries = Object.entries(initialQueryParams);

  return [...queryConfigParamEntries, ...initialQueryParamEntries].filter(
    ([_, entryVal]) => !!entryVal
  );
}

/**
 * useOpenWeatherMapAPI
 *
 * @export
 * @param {IConfig} config
 * @returns React.Reducer<IState, ActionTypes>
 */
export function useOpenWeatherMapAPI(config: IConfig) {
  const [state, dispatch] = React.useReducer<
    React.Reducer<IState, ActionTypes>
  >(openWeatherMapAPIReducer, initialState);

  const baseParams: IParams = {
    APPID: config.key,
    units: config.units || ""
  };

  const paramsForAPIQuery = new URLSearchParams(
    createParamsForAPIQuery(
      queryTypeToQueryParamEntryTransformMethods,
      config.queryConfig,
      baseParams,
      config.queryType
    )
  );

  const request = () => {
    dispatch(requestWeatherData());

    fetch(`${API_URL}?${paramsForAPIQuery.toString()}`)
      .then(r => r.json())
      .then(data => {
        if (data.cod === 200) {
          dispatch(setWeatherData(data));
        } else {
          dispatch(
            setWeatherError({
              cod: data.cod || UNKNOWN_ERROR_CODE,
              message: data.message || UNKNOWN_ERROR_MSG
            })
          );
        }
      });
  };

  return [state, request];
}
