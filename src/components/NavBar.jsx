import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from '../styles/NavBar.module.css'


function NavBar(onSearch) {
    return(
        <div className={style.Container}> 
        <Link to="/"><p> Home </p></Link>
        <div>
            <Link to="/about"> About </Link>
        </div>
        <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default NavBar;