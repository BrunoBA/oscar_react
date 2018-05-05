import React, { Component } from 'react';
import Search from './components/Search.js';  
import Indicateds from './components/Indicateds.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <header className="cabecalho">
          Oscar 2018
        </header>
        <Search/>
        <Indicateds/>
      </div>
    );
  }
}

export default App;
