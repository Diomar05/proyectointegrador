import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Nav = ({ onSearch }) => {
   
    return (
        <div className="Container">
            
            <div className='containerBoton'> 
                <NavLink to="/home">
                    <button  
                    className="BotonNav" 
                    >Home</button>
                </NavLink>

                <NavLink to="/about">
                    <button 
                    className="BotonNav" 
                    >About</button>
                </NavLink>

                <NavLink to="/favorites">
                    <button 
                    className="BotonNav" 
                    >Favorites</button>
                </NavLink>
                
            </div>
            
                <SearchBar onSearch={onSearch} />  
                

      
        </div>


    )
}
export default Nav;