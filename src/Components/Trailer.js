import React from 'react'
import { Link } from "react-router-dom";
import './Components.css';
import logo from '../home.jpg'
import Navbart from './Navbar';


function Trailer(props) {
    return (
        <div>
     <Navbart/>
    <Link to="/"><img src={logo} className="image" alt="vdf"/></Link> 
     <h1 className="titleT">{props.location.Props.name}</h1>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/fGKKW5v6ghY" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media"></iframe>
        </div>
    )
}

export default Trailer