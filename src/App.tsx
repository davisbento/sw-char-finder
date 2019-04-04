import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import JssProvider from 'react-jss/lib/JssProvider';
import 'assets/scss/main.css';

import Home from 'containers/HomeContainer';
import Character from 'containers/CharacterContainer';
import Navbar from 'containers/Navbar';
import { theme } from 'assets/theme';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

class App extends React.Component {
  public render() {
    return (
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <React.Fragment>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/characters' component={Character} />
              </Switch>
            </React.Fragment>
          </Router>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default App;
