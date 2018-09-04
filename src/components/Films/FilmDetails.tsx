import React from 'react';
import { listFilm } from 'helpers/api';

import { IFilm } from 'interfaces/IFilm';

interface IProps {
  path: string;
}

interface IState {
  loading: boolean;
  film: IFilm;
}

class FilmDetails extends React.Component<IProps, IState> {
  readonly state: IState = {
    loading: true,
    film: {
      title: '',
    },
  };

  async componentDidMount() {
    const response = await listFilm(this.props.path);
    this.setState({ loading: false, film: response.result.data });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>{this.state.film.title}</div>
    );
  }
}

export default FilmDetails;