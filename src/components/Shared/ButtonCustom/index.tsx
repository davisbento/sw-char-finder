import Button from '@material-ui/core/Button';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles: StyleRules = {
  root: {
    backgroundColor: '#4056b5',
    borderRadius: '5px',
    color: '#fff'
  }
};

interface IProps {
  classes: any;
  text: string;
  handleSubmit?: any;
}

const buttonCustom = ({ classes, text, handleSubmit }: IProps) => (
  <Button className={classes.root} type='submit' onClick={handleSubmit}>
    {text}
  </Button>
);

export default withStyles(styles)(buttonCustom);
