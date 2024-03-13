import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  if(cities.length){
    return (
      <div className={styles.container}>{
        cities && cities.map(c => 
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.icon}
            onClose={() => onClose(c.id)} // ventana modal
            key={c.id} // es un registro interno del componente en React, no se puede acceder 
            id={c.id}
          />)
        }
      </div>);
  }else{
    return(
      <div>No hay ciudades disponibles</div>
    );
  }
  
};