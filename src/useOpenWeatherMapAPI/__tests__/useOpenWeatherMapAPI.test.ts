/* global describe, it, expect */
import { renderHook, act } from "@testing-library/react-hooks";
import {
  useOpenWeatherMapAPI,
  createParamsForAPIQuery
} from "../useOpenWeatherMapAPI";

const sampleInvalidConfig = {
  key: "I_DO_NOT_EXIST",
  queryConfig: {
    cityName: "Oborniki Śląskie",
    countryCode: "pl"
  },
  queryType: "name",
  units: "metric"
};

describe("useOpenWeatherMapAPI", () => {
  it("Is defined", () => {
    expect(useOpenWeatherMapAPI).toBeDefined();
  });

  it("Should not fetch weather without API key provided", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useOpenWeatherMapAPI(sampleInvalidConfig)
    );

    const [initialState, fetchWeather] = result.current;

    act(() => {
      fetchWeather();
    });

    await waitForNextUpdate();

    const [nextState] = result.current;

    expect(initialState.data).toBe(undefined);
    expect(initialState.pending).toBe(false);
    expect(initialState.error).toBe(undefined);

    expect(nextState.data).toBe(undefined);
    expect(nextState.pending).toBe(false);
    expect(nextState.error && nextState.error.cod).toBe(401);
  });
});

describe("createParamsForAPIQuery", () => {
  it("Is defined", () => {
    expect(createParamsForAPIQuery).toBeDefined();
  });
});
