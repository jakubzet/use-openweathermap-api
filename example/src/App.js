import React from "react";

import useOpenWeatherMapAPI from "@jakubzet/use-openweathermap-api";

const App = () => {
  const [state, fetchWeather] = useOpenWeatherMapAPI({
    key: "07229c74486557510cd3cd1eeac1ad1f",
    queryConfig: {
      cityName: "Oborniki Śląskie",
      countryCode: "pl",
      zipCode: 94040,
      id: 2172797,
      lat: 61,
      lon: 62
    },
    queryType: "name",
    units: "metric"
  });

  return (
    <div>
      <p>Loading: {state.pending ? "true" : "false"}</p>
      {state.error && (
        <p>
          Error: {state.error.cod} : {state.error.message}
        </p>
      )}
      {state.data && state.data.name && state.data.main && (
        <p>
          {state.data.name}: {state.data.main.temp}*C / max{" "}
          {state.data.main.temp_max}*C / min {state.data.main.temp_min}*C
        </p>
      )}
      <button onClick={fetchWeather}>Fetch again</button>
    </div>
  );
};
export default App;
