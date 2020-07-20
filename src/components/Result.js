import React from 'react';
import './Result.css';

const Result = (props) => {

    const{error, city,date,sunrise,sunset,temp,pressure,wind,description,main} = props.weather;

let content = null;
let bad = null;
if(!error && city){

const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    content = (
    <>
    <div className="container">
        <h1>Wyniki wyszukiwania dla: <span>{city}</span></h1>
        <p>Dane dla dnia i godziny: <span>{date}</span></p>
        <p>Aktualna temperatura: <span>{temp} &#176;C</span></p>
        <p>Wschód słońca: <span>{sunriseTime}</span></p>
        <p>Zachód słońca: <span>{sunsetTime}</span></p>
        <p>Siła wiatru: <span>{wind} m/s</span></p>
        <p>Ciśnienie: <span>{pressure} hPa</span></p>
    <p>Zachmurzenie: <span>{main} - {description}</span></p>
        </div>
    </>
    )
}

bad=(
    <div className="error">
            <p>Nie ma takiego miasta: <strong>{city}</strong> w bazie</p>
    </div>

)
    return (  
   <div className="result">
    
{error ? bad : content}

   </div>
    );
}
 
export default Result;
