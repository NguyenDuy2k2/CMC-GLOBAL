import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/hompage';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <header className="App-header">
        <img src={logo}  className="App-logo f " alt="logo" />
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
