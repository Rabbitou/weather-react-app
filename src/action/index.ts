import axios from "axios";
import { WeatherResponse } from "../types/weather";

export const getWeatherByName = async ({ location }: { location: string }) => {
  return axios
    .get<WeatherResponse>("/weather", {
      params: { q: location, units: "metric" },
    })
    .then((res) => res.data);
};
