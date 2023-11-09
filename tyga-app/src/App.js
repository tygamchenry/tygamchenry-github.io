import React from 'react';
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