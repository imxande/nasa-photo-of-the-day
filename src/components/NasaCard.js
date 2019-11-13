import React from "react";
// import NasaGrid from "./NasaGrid";

const NasaCard = (props) => {
    return (
        <div className= "nasa-card">
            <h1>
                {props.title}
            </h1>

            <h2>
                {props.date}    
            </h2>

            <img src =  {props.url} alt="NASA POTD"/>

            <div>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
}

export default NasaCard;