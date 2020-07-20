import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import  './App.css';

const APIKey = `a26713c691dbef1d98428c0c5ef75c06`;
class App extends Component {

state = {
  value: "",
  date: '',
  city: '',
  sunrise: '',
  sunset: '',
  temp: '',
  pressure: '',
  wind: '',
  error: false,
  description:'',
  main:'',
};

handleInputChange = (e) => {
  this.setState({
    value: e.target.value
  })
}

handleCitySubmit = (e) => {
  e.preventDefault();
  let API = '';

  if (location.protocol === 'http:') {
    API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
 } else {
    API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
 }

  fetch(API)
  .then(response =>{
    if(response.ok){
    return response
    }
    throw Error("Podaj prawidłową nazwę miasta")
  })
  .then(response => response.json())
  .then(data => {

    const time = new Date().toLocaleString();

this.setState({
  error:false,
  date: time,
  sunrise: data.sys.sunrise,
  sunset: data.sys.sunset,
  temp: data.main.temp,
  pressure: data.main.pressure,
  wind: data.wind.speed,
  city: this.state.value,
  description: data.weather[0].description,
  main: data.weather[0].main,
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
