import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderConstruction from './Components/UnderConstruction';
import Heading from './Components/Heading';

function App () {
  return (
    <div className="App">
        <Heading />
        <UnderConstruction />
    </div>
  );
}


export default App;