import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

 function NasaGrid(){
    const [nasa, setNasa] = useState([]);
    // const [nasaDate, setDate] = useState('')


useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=vcwN5q9RpIlRsMN2DYaMgM8S6YcySTIkxbmVr1tH`)
    .then(response => {
        console.log(response.data);
        setNasa(response.data);
    })
    .catch( error => {
        console.log( error)
      })

},[])

return (
    <div>
  <NasaCard key = {nasa.date} title = {nasa.title} explanation ={nasa.explanation} Img = {nasa.hdurl}/> 

  </div>
    )
}

export default NasaGrid;