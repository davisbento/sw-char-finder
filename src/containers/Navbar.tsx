import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, StyleRules } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const darthVader = require('assets/images/darth-vader.png');

const styles: StyleRules = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#484846'
  },
  menuButton: {
    marginLeft: 2,
    marginRight: 20,
    width: 40,
    height: 40
  },
  btnLink: {
    textDecoration: 'none',
    color: '#fff'
  },
  imgResponsive: {
    height: 'auto',
    maxWidth: '100%'
  }
};

function ButtonAppBar(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.header}>
        <Toolbar>
          <div className={classes.menuButton}>
            <img className={classes.imgResponsive} src={darthVader} />
          </div>
          <Typography variant='title' color='inherit' className={classes.flex}>
            SW Char Finder
          </Typography>
          <Button color='inherit'><Link className={classes.btnLink} to='/'>Home</Link></Button>
          <Button color='inherit'><Link className={classes.btnLink} to='/characters'>Characters</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);