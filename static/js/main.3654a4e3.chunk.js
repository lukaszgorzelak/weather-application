(this["webpackJsonpweather-application"]=this["webpackJsonpweather-application"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=a(3),i=a(4),s=a(6),u=a(5),m=function(e){return r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{type:"text",value:e.value,onChange:e.change,placeholder:"Podaj miasto"}),r.a.createElement("button",null,"Wyszukaj miasto"))},p=(a(12),function(e){var t,a=e.weather,n=a.error,l=a.city,c=a.date,o=a.temp,i=a.timezone,s=a.description,u=a.pressure,m=a.wind,p=a.sunset,d=a.sunrise,h=a.mintemp,E=a.maxtemp,f=null;return!n&&l&&(f=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,r.a.createElement("li",null,"Miasto: ",r.a.createElement("span",null,l)),r.a.createElement("li",null,"Data i godzina: ",r.a.createElement("span",null,c)),r.a.createElement("li",null,"Aktualna temperatura: ",r.a.createElement("span",null,o," \xb0C")),r.a.createElement("li",null,"Strefa czasowa: ",r.a.createElement("span",null,i)),r.a.createElement("li",null,"Wsch\xf3d s\u0142o\u0144ca: ",r.a.createElement("span",null,d)),r.a.createElement("li",null,"Zach\xf3d s\u0142o\u0144ca: ",r.a.createElement("span",null,p)),r.a.createElement("li",null,"Si\u0142a wiatru: ",r.a.createElement("span",null,m," m/s")),r.a.createElement("li",null,"Ci\u015bnienie: ",r.a.createElement("span",null,u," hPa")),r.a.createElement("li",null,"Zachmurzenie: ",r.a.createElement("span",null,s)),r.a.createElement("li",null,"Min. Temperatura: ",r.a.createElement("span",null,h," \xb0C")),r.a.createElement("li",null,"Max. Temperatura: ",r.a.createElement("span",null,E," \xb0C")))))),t=r.a.createElement("div",{className:"error"},r.a.createElement("p",null,"Nie ma takiego miasta: ",r.a.createElement("strong",null,l)," w bazie")),r.a.createElement("div",{className:"result"},n?t:f)}),d=(a(13),"  d6cb2496f01942fba2e42052202107"),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",timezone:"",pressure:"",wind:"",error:!1,description:"",mintemp:"",maxtemp:"",sunhour:"",icon:"",code:""},e.handleInputChange=function(t){e.setState({value:t.target.value})},e.handleCitySubmit=function(t){t.preventDefault();var a="https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/forecast.json?key=".concat(d,"&q=").concat(e.state.value,"&days=1&units=m&lang=pl");fetch(a).then((function(e){if(e.ok)return e;throw Error("Podaj prawid\u0142ow\u0105 nazw\u0119 miasta")})).then((function(e){return e.json()})).then((function(t){e.setState({error:!1,date:t.location.localtime,timezone:t.location.tz_id,sunrise:t.forecast.forecastday[0].astro.sunrise,sunset:t.forecast.forecastday[0].astro.sunset,mintemp:t.forecast.forecastday[0].day.mintemp_c,maxtemp:t.forecast.forecastday[0].day.maxtemp_c,temp:t.current.temp_c,pressure:t.current.pressure_mb,wind:t.current.wind_kph,city:e.state.value,code:t.forecast.forecastday[0].day.condition.code,description:t.forecast.forecastday[0].day.condition.text})})).catch((function(t){console.log(t),e.setState({error:!0,city:e.state.value})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmit}),r.a.createElement(p,{weather:this.state}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3654a4e3.chunk.js.map