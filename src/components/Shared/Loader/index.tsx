import { withStyles } from '@material-ui/core/';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

interface IProps {
  classes: any;
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '70px'
  }
};

const loader = ({ classes }: IProps) => {
  return (
    <div className={classes.root}>
      <CircularProgress size={50} />
    </div>
  );
};

export default withStyles(styles)(loader);
