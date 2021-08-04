import React from 'react'
import { Card} from 'react-bootstrap';
import './Components.css';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'



function MoviesCard({elm}) {

  return (
    <div>
       <div >
          
            <Card className="card" name="one" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elm.image}/>
            <Card.Body>
              <Card.Title>{elm.name}</Card.Title>
              <Card.Text>
              {elm.shortdescription}
              </Card.Text>
             <div className="star"> <ReactStars 
              count={5}
              edit={false}
              size={24}
              value={elm.rating}
              activeColor="#ffd700"
            /></div>
            
              <Card.Text> <Link to={{pathname:`/Trailer/${elm.name}`,Props:{name:elm.name,url:elm.urlt}}}>watch trailer</Link> </Card.Text>
              <Card.Text> <Link to={{pathname:`/Description/${elm.name}`,Props:{name:elm.name,description:elm.description}}}>Read more</Link> </Card.Text>
              <Card.Text>
              <a href={elm.url}>
              watch
              </a>
              </Card.Text>
            </Card.Body>
          </Card>
           
         </div>
    </div>
  )
}

export default MoviesCard




