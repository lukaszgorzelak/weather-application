import React from 'react';
import './Result.css';

const Result = (props) => {

    const{error, city,date,temp,timezone,description,pressure,wind} = props.weather;
    // sunset,sunrise,mintemp,maxtemp,sunhour

let content = null;
let bad = null;
if(!error && city){

// const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
// const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    content = (
    <>
    <div className="container">
        <h1>Wyniki wyszukiwania dla: <span>{city}</span></h1>
        <p>Data i godzina: <span>{date}</span></p>
        <p>Aktualna temperatura: <span>{temp} &#176;C</span></p>
        <p>Strefa czasowa: <span>{timezone}</span></p>
        {/* <p>Wschód słońca: <span>{sunrise}</span></p> 
        <p>Zachód słońca: <span>{sunset}</span></p>  */}
        <p>Siła wiatru: <span>{wind} m/s</span></p> 
        <p>Ciśnienie: <span>{pressure} hPa</span></p>
        <p>Zachmurzenie: <span>{description}</span></p>
        {/* <p>Min. Temperatura: <span>{mintemp} &#176;C</span></p>
        <p>Max. Temperatura: <span>{maxtemp} &#176;C</span></p> 
        <p>Liczba godz. słonecznych: <span>{sunhour} h</span></p>  */}
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
