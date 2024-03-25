import React, { useState } from "react";
import { getWeatherByName } from "../action";
import { WeatherResponse } from "../types/weather";
import Loader from "./Loader";
import WeatherCard from "./WeatherCard";
import IconSearch from "./IconSearch";

export default function WeatherForm() {
  const [value, setValue] = useState("");
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    if (error) setError("");
    try {
      setIsLoading(true);
      const res = await getWeatherByName({ location: value });
      setData(res);
    } catch (error) {
      if (data) setData(null);
      setError("Something went wrong !");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[450px] w-full p-4 rounded-md border border-gray-800 bg-gray-900">
      <form className="flex gap-2" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          className="bg-transparent border border-gray-700 outline-none rounded-md w-full h-10 px-2"
          onChange={handleOnChange}
        />
        <button
          className="h-10 flex items-center justify-center bg-gray-800 w-10 rounded-md hover:bg-gray-700 transition-all"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : <IconSearch />}
        </button>
      </form>
      {error ? (
        <span className="block text-sm mt-2 text-red-500">{error}</span>
      ) : null}
      {data ? <WeatherCard data={data} /> : null}
    </div>
  );
}
