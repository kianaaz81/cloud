import { useState } from "react";
import SearchBar from "./searchbar";
import WeatherCard from "./weatherCard";

const WeatherApp = () => {
  const [WeatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = "076ebe2f0613424d82885603250804";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        console.error("city not found");
      }
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  return (
    <div className="grid text-center justify-center pt-30">
        <h1 className="text-4xl font-mono font-black text-white bg-blue-500 opacity-70 p-2 rounded-4xl">WeatherApp</h1>
      <SearchBar fetchWeather={fetchWeather} />
      {WeatherData && <WeatherCard data={WeatherData}/>}
    </div>
  );
};
export default WeatherApp;
