import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import  './App.css';

const APIKey = `96485acf2df68545b326e51fcbc1e970`;
class App extends Component {

state = {
  value: "",
  date: '',
  city: '',
  // sunrise: '',
  // sunset: '',
  temp: '',
  timezone:'',
  icon:'',
  pressure: '',
  wind: '',
  error: false,
  description:'',
  // mintemp:'',
  // maxtemp:'',
  // sunhour:'',
};

handleInputChange = (e) => {
  this.setState({
    value: e.target.value
  })
}

handleCitySubmit = (e) => {
  e.preventDefault();
  // let API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
  let API = `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/forecast?access_key=${APIKey}&query=${this.state.value}&units=m`;


//   if (location.protocol === 'http:') {
//     API = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
//  } else {
//     API = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
//  }

  fetch(API)
  .then(response =>{
    if(response.ok){
    return response
    }
    throw Error("Podaj prawidłową nazwę miasta")
  })
  .then(response => response.json())
  .then(data => {

    // const time = new Date().toLocaleString();

this.setState({
  error:false,
  date: data.location.localtime,
  timezone: data.location.timezone_id,
  // sunrise: data.forecast[ '2020-07-22'].astro.sunrise,
  // sunset: data.forecast['2020-07-22'].astro.sunset,
  // mintemp: data.forecast[ '2020-07-22'].mintemp,
  // maxtemp: data.forecast[ '2020-07-22'].maxtemp,
  // sunhour: data.forecast[ '2020-07-22'].sunhour,
  temp: data.current.temperature,
  pressure: data.current.pressure,
  wind: data.current.wind_speed,
  city: this.state.value,
  description: data.current.weather_descriptions,
 
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
