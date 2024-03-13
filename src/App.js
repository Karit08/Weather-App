import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
// import data from './data.js';
const apiKey  = "3d4f3762692bbce1f2224f1cd6b59af1";

function App() {

  const [cities, setCities] = useState([]);

  function onSearch(city){
    if(cities.includes(city)){
      return alert("Ya buscaste la ciudad");
    }else{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json()) //covierte la respuesta en JSON
      .then((recurso) => {
        console.log(recurso)
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            name: recurso.name,
            id: recurso.id,
            icon: recurso.weather[0].icon,
            // wind: recurso.wind.speed,
            // temp: recurso.main.temp,
            // weather: recurso.weather[0].main,
            // clouds: recurso.clouds.all,
            // latitud: recurso.coord.lat,
            // longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      }
    )
    }
  };

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  };

  return (
    <div className="App">
      <div>
        <SearchBar
          onSearch={onSearch} //le pasamos la función, no la invocación
        />
      </div>
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

export default App;
