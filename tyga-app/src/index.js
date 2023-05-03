import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Hey hey hey, React!</h1>,
  document.getElementById('root')
);

const name = 'Tyga';
const intro = <p>Hi there, {name}</p>;

root.render(
  intro,
  document.getElementById('intro')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();