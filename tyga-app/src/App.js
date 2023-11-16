import React from 'react';
//import './styles.scss';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderConstruction from './Components/UnderConstruction';
import Header from './Components/Header';
import Footer from './Components/Footer';


export default function App () {

  return (
    <div className="App">
        <Header />
        <UnderConstruction />
        <Footer />
    </div>
  );
}