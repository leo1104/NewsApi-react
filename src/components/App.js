import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import News from './News';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={27}/>
      </div>
    );
  }
}

export default App;


