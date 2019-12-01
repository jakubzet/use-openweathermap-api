import { useOpenWeatherMapAPI } from "../useOpenWeatherMapAPI";
// import { renderHook, act } from "@testing-library/react-hooks";

describe("useOpenWeatherMapAPI", () => {
  it("is truthy", () => {
    expect(useOpenWeatherMapAPI).toBeTruthy();
  });
});

// test('should increment counter', () => {
//   const { result } = renderHook(() => useOpenWeatherMapAPI())

//   act(() => {
//     result.current.increment()
//   })

//   expect(result.current.count).toBe(1)
// })
