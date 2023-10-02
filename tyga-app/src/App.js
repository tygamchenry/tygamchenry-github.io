import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import PortfolioNav from './Components/Navigation';

function App () {
    return (
        <div>
            {/* <h1>Hello</h1> */}
            <PortfolioNav />
        </div>
    );
}

export default App;