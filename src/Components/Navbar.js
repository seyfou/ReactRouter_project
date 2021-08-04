import React from 'react'
import {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css';


function Navbart() {

    return (
        <div>
  <Navbar className="navColor" expand="lg">
  <Navbar href="#home" className="logo">Go<h1 className="box">My </h1>Movies</Navbar>
  </Navbar>
  </div>
    )
}

export default Navbart

