import React from "react";

export default function Item(prop) {
  const fecha = new Date(prop.dt_txt);

  return (
    <div className="item">
      <div className="fecha">
        📆 {fecha.getDate()}/{fecha.getMonth()}/{fecha.getFullYear()}
      </div>
      <div className="hora">
        ⏰ {fecha.getHours()}:{fecha.getMinutes()}
      </div>
      <div className="temperatura"> 🌡{Math.round(prop.main.temp)}°C</div>
      <div className="maxima">📈 {Math.round(prop.main.temp_max)}°C</div>
      <div className="minima">📉 {Math.round(prop.main.temp_min)}°C</div>
    </div>
  );
}
