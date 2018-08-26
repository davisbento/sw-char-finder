import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'assets/scss/main.css';

import Home from 'containers/HomeContainer';
import Character from 'containers/CharacterContainer';
import Navbar from 'containers/Navbar';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={Character} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
