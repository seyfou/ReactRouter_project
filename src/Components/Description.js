import React from 'react'
import Search from './Search';
import './Components.css';
import logo from '../home.jpg';
import { Link } from "react-router-dom";

const Description = (props) => {
    return (    
        <div>
          
             <Search/>
    <Link to="/"><img src={logo} className="image" alt="gfdg"/></Link> 
          <h1 className="titleT">{props.location.Props.name}</h1>
          <p className="descT">{props.location.Props.description}</p>
        </div>
    )
}

export default Description
