import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Tyga';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Hey hey hey, {name}!</h1>,
  document.getElementById('root')
);

var car = {
  make: "Kia",
  model: "Rio",
  year: 2020,
  owner: {name: "Tyga McHenry", state: "IL"},
  action: function() {alert("Vroom!");}
}

//Get car owner's name and make:
var carOwner = car.owner.name;

var carMake = car.make;

//Show message:
alert("I like your " + carMake + "," + carOwner + "!")


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();