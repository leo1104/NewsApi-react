import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import News from './News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News pageSize={27} country="in" category="general"/> */}
        <Switch>
          <Route exact path="/buisness"><News key="buisness" pageSize={27} country="in" category="buisness"/></Route>
          <Route exact path="/"><News key="general" pageSize={27} country="in" category="general"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={27} country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News key="health" pageSize={27} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" pageSize={27} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={27} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={27} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


