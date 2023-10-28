import React from 'react';
import Blockpromo from "./components/blockpromo/blockpromo"
import SearchBar from "./components/searchbar/searchbar"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Logo">
        <img src={logo} alt="logo" />
       </header>
       <body>

        <SearchBar />
        <Blockpromo />
        
        </body>
      
    </div>
  );
}

export default App;
