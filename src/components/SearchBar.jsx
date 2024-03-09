import React from 'react';
import Button from 'react-bootstrap/Button';
import style from '../styles/Search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={style.containerInput}>
      <input type="text" name='text' autoComplete='off' placeholder='Search city' className={style.input}/>
      <Button variant="outline-primary" onClick={()=>props.onSearch('Search city... ')} >Add</Button>{' '}
    </div>
  )
};

// ()=>props.onSearch('Search ... ') devuelve la ejecución de la función (clousures)