import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder='City ...'/>
      <button onClick={()=>props.onSearch('Search city... ')}>Add</button>
    </div>
  )
};

// ()=>props.onSearch('Search ... ') devuelve la ejecución de la función (clousures)