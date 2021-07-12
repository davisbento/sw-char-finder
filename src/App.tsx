import { ThemeProvider } from '@material-ui/core';
import { theme } from 'assets/theme';
import Character from 'containers/CharacterContainer';
import Home from 'containers/HomeContainer';
import Navbar from 'containers/Navbar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={Character} />
          </Switch>
        </Fragment>
      </Router>
    </ThemeProvider>
  );
};
