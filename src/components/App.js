import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import  './App.css';

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
  let API = `https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${this.state.value}&days=1&units=m&lang=pl`;

  fetch(API)
  .then(response =>{
    if(response.ok){
    return response
    }
    throw Error("Podaj prawidłową nazwę miasta")
  })
  .then(response => response.json())
  .then(data => {

this.setState({
  error:false,
  date: data.location.localtime,
  timezone: data.location.tz_id,
  sunrise: data.forecast.forecastday[0].astro.sunrise,
  sunset: data.forecast.forecastday[0].astro.sunset,
  mintemp: data.forecast.forecastday[0].day.mintemp_c,
  maxtemp: data.forecast.forecastday[0].day.maxtemp_c,
  temp: data.current.temp_c,
  pressure: data.current.pressure_mb,
  wind: data.current.wind_kph,
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
