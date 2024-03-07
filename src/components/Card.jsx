import React from 'react';

export default function Card(props) { //export default function Card({onClose, name, min, max, img}) {
  // acá va tu código //Card Component

  // let min =((props.min - 32) /1.8) aqui lo trato de convertir a Farenheit <p>{min}</p>

  return (
  <div>
    <button onClick={props.onClose}>X</button>
    <h4>{props.name} </h4>
    <p>Mín</p>
    <p>{props.min}</p> 
    <p>Máx</p>
    <p>{props.max}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img not found" />
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