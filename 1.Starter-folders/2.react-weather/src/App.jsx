import { useEffect, useState } from "react";
import loader from "./assets/loader.svg";
import "./App.css";
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        setWeatherData({
          city: resData.data.city,
          country: resData.data.country,
          iconId: resData.data.current.weather.ic,
          temperature: resData.data.current.weather.tp,
        });
      });

    return () => {};
  }, []);

  return (
    <main>
      <div className={`loader-container ${!weatherData && "active"}`}>
        <img src={loader} alt="loading icon" />
      </div>

      {weatherData && (
        <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          <div className="info-icon-container">
            <img src={`/icons/${weatherData.iconId}.svg`} alt="weather icon" className="info-icon" />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
