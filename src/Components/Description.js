import React from 'react'
import './Components.css';
import logo from '../home.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Navbart from './Navbar';

const Description = (props) => {
    return (    
      
      <div>
       <Navbart/>
    <Link to="/"><img src={logo} className="image" alt="gfdg"/></Link> 
          <h1 className="titleT">{props.location.Props.name}</h1>
          <p className="descT">{props.location.Props.description}</p>
        </div>
    )
}

export default Description
