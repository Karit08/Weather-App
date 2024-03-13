import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Card.module.css'

export default function Card(props) { //export default function Card({onClose, name, min, max, img}) {
  // acá va tu código //Card Component

  // let min =((props.min - 32) /1.8) aqui lo trato de convertir a Farenheit <p>{min}</p>
  // {props.name === "Cairns" ? styles.card1 : styles.card } se puede hacer condicionales en estilos

  return (
  <div className={styles.containerCard}>
    <div className={styles.containerButton}>
      <Button variant="outline-danger" className={styles.btn} onClick={props.onClose} >X</Button>{' '}
    </div>
    <h4 className={styles.containerName}>{props.name} </h4>
    <div className={styles.containerInfo}>
      <div className={styles.card}>
        <p>Mín</p>
        <p>{props.min}°</p> 
        <p>Máx</p>
        <p>{props.max}°</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img not found"  className={styles.img}/>
    </div>   
  </div>
  )
};

// Con DESTRUCTURIN
// export default function Card({onClose, name, min, max, img}) {
//   // acá va tu código //Card Component
//   return (
//   <div>
//     <button onClick={onClose}>X</button>
//     <h4>{name} </h4>
//     <p>Mín</p>
//     <p>{min}</p>
//     <p>Máx</p>
//     <p>{max}</p>
//     <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />
//   </div>
//   )
// };