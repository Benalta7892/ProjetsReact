import { useEffect, useState } from "react";
import loader from "./assets/loader.svg";
import browser from "./assets/browser.svg";
import "./App.css";
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
      .then((res) => {
        // 400 - 499 : Erreur client
        // 500 - 599 : Erreur serveur
        if (!res.ok) throw new Error(`Error ${res.status}, ${res.statusText}`);

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
      })
      .catch((err) => {
        setErrorInfo(err.message);
      });

    return () => {};
  }, []);

  return (
    <main>
      <div className={`loader-container ${!weatherData && !errorInfo && "active"}`}>
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

      {errorInfo && !weatherData && (
        <>
          <p className="error-information">{errorInfo}</p>
          <img src={browser} alt="error icon" />
        </>
      )}
    </main>
  );
}

export default App;
