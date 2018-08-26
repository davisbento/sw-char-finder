import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface IProps {
  isOpen: boolean;
  data: any;
  handleClose: any;
}

const characterDetails = ({ isOpen, data, handleClose }: IProps) => (
  <Dialog open={isOpen} onClose={handleClose}>
    <DialogContent>
      <div>Name: {data.name}</div>
      <div>Height: {data.height}</div>
    </DialogContent>
  </Dialog>
);

export default characterDetails;