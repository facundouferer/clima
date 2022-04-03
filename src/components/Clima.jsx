import { useState, useEffect } from "react";
import Item from "./Item";

export default function Clima() {
  const [climaFuturo, setClimaFuturo] = useState({});
  const [climaActual, setClimaActual] = useState({});
  const [ciudad, setCiudad] = useState("");

  const apiKey = "46f6dbf9b1a105f44bdfef16a587a1a8";
  const units = "metric";
  const lang = "es";

  const getClimaFuturo = async (e) => {
    if (e.key == "Enter") {
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=${units}&lang=${lang}&appid=${apiKey}`
      ).then((res) =>
        res.json().then((data) => {
          setClimaFuturo(data);
        })
      );

      const apiCall2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=${units}&lang=${lang}&appid=${apiKey}`
      ).then((res) =>
        res.json().then((data) => {
          setClimaActual(data);
        })
      );
    }
  };

  useEffect(() => {
    setCiudad("");
  }, [climaFuturo]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => setCiudad(e.target.value)}
        value={ciudad}
        onKeyPress={getClimaFuturo}
      />
      {typeof climaActual.name != "undefined" ? (
        <div className="tiempo">
          <h1>{climaActual.name}</h1>
          <div className="actual">
            <h2>🌡 {Math.round(climaActual.main.temp)}°C</h2>
            <div className="maxima">
              📈{Math.round(climaActual.main.temp_max)}°C
            </div>
            <div className="minima">
              📉 {Math.round(climaActual.main.temp_min)}°C
            </div>
          </div>
          <div className="futuro">
            {climaFuturo.list.map((item, index) => (
              <Item {...item} key={index}></Item>
            ))}
          </div>
        </div>
      ) : (
        <h1>Bienvenido</h1>
      )}
    </div>
  );
}
