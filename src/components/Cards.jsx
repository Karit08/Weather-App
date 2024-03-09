import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(!props.cities){
    return <h1>No hay ciudades disponibles</h1>
  }
  return (
  <div className={styles.container}>{
    props.cities && props.cities.map(c => 
      <Card
        max={c.main.temp_max}
        min={c.main.temp_min}
        name={c.name}
        img={c.weather[0].icon}
        onClose={() => alert(c.name)} // ventana modal
        key={c.id} // es un registro interno del componente en React, no se puede acceder 
      />)
    }
  </div>)
};