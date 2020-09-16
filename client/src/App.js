import React from 'react';
import logo from './logo.svg';
import './App.css';
import Standings from './views/Standings';
import Home from './views/Home';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Standings path="/standings/:year"/>
      </Router>
    </div>
  );
}

export default App;
