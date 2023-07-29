import React from 'react';
import { useState } from 'react';
import search from "./SearchBar.module.css"


export default function SearchBar({ onSearch, closeSession }) {
const [id, setId] = useState([]);

const handleChange = (event) =>{
  setId(event.target.value)
}
    return (   
            <div className={search.searchContainer}>
               <input 
                  className={search.Input}  
                  onChange={handleChange}
                  value={id} 
                  type='search' 
                  placeholder="Buscar..."
                  />

                  <button className={search.Button} 
                  onClick={()=> onSearch(id)}>Buscar</button>  
                  <button className={search.Button}  onClick={closeSession}>Logout</button> 
   </div>

    );
 }
 