import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import style from '../styles/Search.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("");

  return (
    // <form onSubmit={(e) => {
    //   e.preventDefault();
    //   onSearch("Cairns");
    // }}>
    //   <input
    //     type="text"
    //     placeholder="Ciudad..."
    //   />
    //   <input type="submit" value="Agregar" />
    // </form>
    <form 
      className={style.containerInput}
      onSubmit={(e)=>{ //esto tiende a recargar la pagina
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input 
        type="text" 
        placeholder='Search city'  
        value={city} 
        onChange={e=>setCity(e.target.value)}
        className={style.input}
      />
      <input type="submit" value="Agregar"/>
      {/* <Button variant="outline-primary">Add</Button>{' '} */}
    </form>
  )
};

// ()=>props.onSearch('Search ... ') devuelve la ejecución de la función (clousures)