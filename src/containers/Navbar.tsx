import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const darthVader = require('assets/images/darth-vader.png');

const styles = (theme: any) => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  header: {
    backgroundColor: theme.palette.primary.main
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
});

function ButtonAppBar(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.header}>
        <Toolbar>
          <div className={classes.menuButton}>
            <img className={classes.imgResponsive} src={darthVader} />
          </div>
          <Typography variant='h5' className={classes.flex}>
            SW Char Finder
          </Typography>
          <Button color='inherit'>
            <Link className={classes.btnLink} to='/'>
              Home
            </Link>
          </Button>
          <Button color='inherit'>
            <Link className={classes.btnLink} to='/characters'>
              Characters
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
