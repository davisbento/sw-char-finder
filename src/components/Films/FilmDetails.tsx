import { listFilm } from 'helpers/api';
import { IFilm } from 'interfaces/IFilm';
import { Component } from 'react';

interface IProps {
  path: string;
}

interface IState {
  loading: boolean;
  film: IFilm;
}

class FilmDetails extends Component<IProps, IState> {
  readonly state: IState = {
    loading: true,
    film: {
      title: ''
    }
  };

  async componentDidMount() {
    const response = await listFilm(this.props.path);
    this.setState({ loading: false, film: response?.result?.data || null });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return <div>{this.state.film.title}</div>;
  }
}

export default FilmDetails;
