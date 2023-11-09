import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout';
import UnderConstruction from './Components/UnderConstruction';


export default function App () {
  return (
    <div className="App">
        <Layout>
            <UnderConstruction />
        </Layout>
    </div>
  );
}