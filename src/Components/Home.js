import React from 'react'
import Search from './Search';
import MovieList from './MovieList';
import AddMovies from './AddMovies';
import {useState} from 'react';


function Home() {
  const [film,setFilm]=useState([{ 
    name:"Chernobyl: Abyss",
    image:"https://img.moviesjoy.to/resize/188x288/9c/32/9c32b2293db8584b1530558c177add3c/9c32b2293db8584b1530558c177add3c.jpg",
    description:"Chernobyl: Abyss is the first major Russian feature film about the aftermath of the explosion at the Chernobyl nuclear power station, when hundreds of people sacrificed their lives to clean up the site of the catastrophe, and to successfully prevent an even bigger disaster that could have turned a large part of the European continent into an uninhabitable exclusion zone.",
    shortdescription:"Abyss is about the aftermath of the explosion at the Chernobyl nuclear power station.",
    genre:"History, Drama",
    url:"https://moviesjoy.to/movie/chernobyl-abyss-70609",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'4'

  },
  {
    name:"Icemen",
    image:"https://img.moviesjoy.to/resize/188x288/ab/7b/ab7bf49ad6e4536d7555f6bb9d44c227/ab7bf49ad6e4536d7555f6bb9d44c227.jpg",
    description:"A riveting story of polar exploration that investigates the motivation, psychology, science, and physical endurance that have characterized the historic heroes who have explored the frozen continent of Antarctica over the last 200 years.",
    shortdescription:"A stoty of the historic heroes who have explored the frozen continent of Antarctica.",
    genre:"History, Documentary",
    url:"https://moviesjoy.to/movie/icemen-200-years-in-antarctica-67542",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'5'

  },
  {
    name:"Witnesses",
    image:"https://img.moviesjoy.to/resize/188x288/28/f2/28f2c9ff69b213006bb8be36991440c6/28f2c9ff69b213006bb8be36991440c6.jpg",
    description:"The gripping true story of the first three witnesses to the Book of Mormon.",
    shortdescription:"The gripping true story of the first three witnesses to the Book of Mormon.",
    genre:"History, Family, Drama",
    url:"https://moviesjoy.to/movie/witnesses-70255",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'4'

  },
  {
    name:"The Last Frontier",
    image:"https://img.moviesjoy.to/resize/188x288/b2/7e/b27eb05b720c774d608b862ee71a837f/b27eb05b720c774d608b862ee71a837f.jpg",
    description:"The story of the Podolsk cadets’ heroic stand outside Moscow in October 1941. Cadets were sent to the Ilyinsky line, fighting alongside units from the Soviet 43rd Army to hold back the German advance until reinforcements arrived. Hopelessly outnumbered, young men laid down their lives in a battle lasting almost two weeks to obstruct the far superior German forces advancing towards Moscow. Around 3,500 cadets and their commanding officers were sent to hold up the last line of defense outside Moscow. Most of them remained there for eternity.",
    shortdescription:"The story of the Podolsk cadets’ heroic stand outside Moscow in October 1941. ",
    genre:"History, War, Drama",
    url:"https://moviesjoy.to/movie/the-last-frontier-69469",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'5'

  },
  {
    name:"Edge of the World",
    image:"https://img.moviesjoy.to/resize/188x288/e0/8b/e08b2ec5e7744801c6d30ec52649d9b1/e08b2ec5e7744801c6d30ec52649d9b1.jpg",
    description:"Biopic about Sir James Brooke, the British adventurer who became King of Sarawak in the 1840's and embarked on a lifelong crusade to end piracy and head-hunting - only to face charges of murder and piracy himself.",
    shortdescription:"Sir James Brooke, the British adventurer who became King of Sarawak in the 1840's.",
    genre:"Adventure, History, Drama",
    url:"https://moviesjoy.to/movie/edge-of-the-world-70108",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'2'

  },
  {
    name:"Jungle Cruisek",
    image:"https://img.moviesjoy.to/resize/188x288/6c/62/6c629d59a9a4a3cf6324b5a6c886a4f4/6c629d59a9a4a3cf6324b5a6c886a4f4.jpg",
    description:"Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
    shortdescription:"Dr. Lily Houghton enlists the aid to take her down the Amazon in his ramshackle boat.",
    genre:"Adventure, Family, Fantasy",
    url:"https://moviesjoy.to/movie/jungle-cruise-69692",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'4'

  },
  {
    name:"Tom & Jerry",
    image:"https://img.moviesjoy.to/resize/188x288/49/28/492801e1400915d5aadf0de9f3c9eb0b/492801e1400915d5aadf0de9f3c9eb0b.jpg",
    description:"Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can't evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
    shortdescription:" Tom and Jerry  get kicked out of their home and relocate to a fancy New York hotel. ",
    genre:"Comedy, Adventure, Family",
    url:"https://moviesjoy.to/movie/tom-jerry-67902",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'3'

  },
  {
    name:"Superman",
    image:"https://img.moviesjoy.to/resize/188x288/13/29/1329eea7d8ae66b2ae0d6aa980a4ba1b/1329eea7d8ae66b2ae0d6aa980a4ba1b.jpg",
    description:"It’s the dawn of a new age of heroes, and Metropolis has just met its first. But as Daily Planet intern Clark Kent – working alongside reporter Lois Lane – secretly wields his alien powers of flight, super-strength and x-ray vision in the battle for good, there’s even greater trouble on the horizon.",
    shortdescription:" It’s the dawn of a new age of heroes, and Metropolis has just met its first. ",
    genre:"Animation, Science Fiction",
    url:"https://moviesjoy.to/movie/superman-man-of-tomorrow-63269",
    urlt:"https://www.youtube.com/embed/fGKKW5v6ghY",
    rating:'5'

  },


])
const add=(newMovie)=>{
  setFilm(film=>([...film,newMovie]))
  console.log(newMovie)
 
}
const [text, settext] = useState('')
const [rate, setrate] = useState('1')


const searchtext=(text)=>{
settext(text)
}
const searchrate=(rate)=>{
  setrate(rate)
  }
  return (
    <div>
  
        <div className="App">
    <Search searchtext={searchtext} searchrate={searchrate}/>
    <MovieList film={film} text={text} rate={rate}/>
    <AddMovies add={add}/>
    
    </div>
    </div>
  )
}

export default Home

