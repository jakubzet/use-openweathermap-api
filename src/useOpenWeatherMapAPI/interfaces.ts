import { QueryParamsType, QueryByType, QueryUnitsType } from "./types";

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };

  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;

  base: string;

  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };

  visibility: number;

  wind: {
    speed: number;
    deg: number;
  };

  clouds: {
    all: number;
  };

  dt: number;

  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };

  timezone: number;

  id: number;

  name: string;

  cod: number;
}

export interface IWeatherError {
  cod: string;
  message: string;
}

export interface IState {
  data?: IWeatherData;
  pending: boolean;
  error?: IWeatherError;
}

export interface IConfig {
  key: string;
  queryConfig: QueryParamsType;
  queryType: QueryByType;
  units?: QueryUnitsType;
}

export interface IParams {
  APPID: string;
  units: string;
}
