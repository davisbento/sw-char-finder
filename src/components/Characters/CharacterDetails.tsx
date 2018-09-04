import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import FilmDetails from '../Films/FilmDetails';

import { ICharacter } from 'interfaces/ICharacter';

interface IProps {
  isOpen: boolean;
  data: ICharacter;
  handleClose: any;
}

const characterDetails = ({ isOpen, data, handleClose }: IProps) => (
  <Dialog open={isOpen} onClose={handleClose}>
    <DialogTitle>Details of character: {data.name}</DialogTitle>
    <DialogContent>
      <div>Name: {data.name}</div>
      <div>Height: {data.height}</div>
      <hr />
      Films:
      {data.films.map((film, index) => (
        <FilmDetails key={index} path={film} />
      ))}
    </DialogContent>
  </Dialog>
);

export default characterDetails;