import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import  './App.css';

// const APIKey = `96485acf2df68545b326e51fcbc1e970`;
const APIKey = `  d6cb2496f01942fba2e42052202107`;

class App extends Component {
  
state = {
  value: "",
  date: '',
  city: '',
  sunrise: '',
  sunset: '',
  temp: '',
  timezone:'',
  pressure: '',
  wind: '',
  error: false,
  description:'',
  mintemp:'',
  maxtemp:'',
  sunhour:'',
  icon:'',
  code:'',
};

handleInputChange = (e) => {
  this.setState({
    value: e.target.value
  })
}

handleCitySubmit = (e) => {
  e.preventDefault();
  // let API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
  // let API = `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/forecast?access_key=${APIKey}&query=${this.state.value}&units=m`;
  let API = `https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${this.state.value}&days=1&units=m`;

  fetch(API)
  .then(response =>{
    if(response.ok){
    return response
    }
    throw Error("Podaj prawidłową nazwę miasta")
  })
  .then(response => response.json())
  .then(data => {

    // const time = new Date();
   

this.setState({
  error:false,
  date: data.location.localtime,
<<<<<<< HEAD
  timezone: data.location.tz_id,
  sunrise: data.forecast.forecastday[0].astro.sunrise,
  sunset: data.forecast.forecastday[0].astro.sunset,
  mintemp: data.forecast.forecastday[0].day.mintemp_c,
  maxtemp: data.forecast.forecastday[0].day.maxtemp_c,
  // sunhour: data.forecast.forecastday.day.mintemp_c.sunhour,
  temp: data.current.temp_c,
  pressure: data.current.pressure_mb,
  wind: data.current.wind_kph,
=======
  timezone: data.location.timezone_id,
  sunrise: data.forecast[ '2020-07-23'].astro.sunrise,
  sunset: data.forecast['2020-07-23'].astro.sunset,
  mintemp: data.forecast[ '2020-07-23'].mintemp,
  maxtemp: data.forecast[ '2020-07-23'].maxtemp,
  sunhour: data.forecast[ '2020-07-23'].sunhour,
  temp: data.current.temperature,
  pressure: data.current.pressure,
  wind: data.current.wind_speed,
>>>>>>> 99ca23243d0d502c8f448ea63a9666a0ce7aa404
  city: this.state.value,
  code:data.forecast.forecastday[0].day.condition.code,
  description: data.forecast.forecastday[0].day.condition.text,
  
 
})
  })
  .catch(error => {
    console.log(error);
  this.setState({
    error:true,
    city:this.state.value
  })
})
}

render(){
  return (
    <div className="app">
     <Form 
     value={this.state.value} 
     change={this.handleInputChange}
     submit={this.handleCitySubmit}
      />
     <Result weather={this.state} />
    </div>
  );
}
}

export default App;
