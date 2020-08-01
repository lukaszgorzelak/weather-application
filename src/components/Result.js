import React from 'react';
import './Result.css';

const Result = (props) => {

    const{error, city,date,temp,timezone,description,pressure,wind,sunset,sunrise,mintemp,maxtemp} = props.weather;
    let bad = null;
    let content = null;

if(!error && city){

    content = (
    <>
    <div className="container">
        <ul>
        <li>Miasto: <span>{city}</span></li>
        <li>Data i godzina: <span>{date}</span></li>
        <li>Aktualna temperatura: <span>{temp} &#176;C</span></li>
        <li>Strefa czasowa: <span>{timezone}</span></li>
        <li>Wschód słońca: <span>{sunrise}</span></li> 
        <li>Zachód słońca: <span>{sunset}</span></li> 
        <li>Siła wiatru: <span>{wind} m/s</span></li> 
        <li>Ciśnienie: <span>{pressure} hPa</span></li>
        <li>Zachmurzenie: <span>{description}</span></li>
        <li>Min. Temperatura: <span>{mintemp} &#176;C</span></li>
        <li>Max. Temperatura: <span>{maxtemp} &#176;C</span></li> 
        </ul>
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
