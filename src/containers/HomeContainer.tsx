import { StyleRules, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CharacterDetails from 'components/Characters/CharacterDetails';
import CharacterList from 'components/Characters/CharacterList';
import ButtonCustom from 'components/Shared/ButtonCustom';
import { listAllCharacters, listByName } from 'helpers/api';
import { ICharacter } from 'interfaces/ICharacter';
import { IPagination } from 'interfaces/IPagination';
import React from 'react';

const styles: StyleRules = {
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inline: {
    display: 'flex',
    justifyContent: 'center'
  },
  pr8: {
    paddingRight: '8px'
  }
};

interface IProps {
  classes: any;
}

interface IState {
  name: string;
  list: ICharacter[];
  loading: boolean;
  open: boolean;
  pagination: IPagination;
  data: any;
  searched: boolean;
}

class Home extends React.Component<IProps, IState> {
  readonly state: IState = {
    name: '',
    list: [],
    loading: false,
    pagination: {
      count: 0,
      page: 0,
      next: '',
      previous: ''
    },
    data: {},
    open: false,
    searched: false
  };

  handleChange = (e: any) => {
    this.setState({ name: e.target.value });
  };

  handleOpen = (open: boolean, data: any) => {
    this.setState({ open, data });
  };

  handleChangeFilter = async (filter: string = null, page: number = 0) => {
    this.setState({ loading: true });
    const response: any = await listAllCharacters(filter);
    this.setState({ loading: false });
    if (response.success) {
      const { pagination } = this.state;
      pagination.page = page;
      pagination.count = response.result.data.count;
      pagination.next = response.result.data.next;
      pagination.previous = response.result.data.previous;

      this.setState({
        list: response.result.data.results,
        pagination
      });
    }
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
    this.setState({ loading: true, searched: true });
    const response: any = await listByName(this.state.name);
    this.setState({ loading: false });
    if (response.success) {
      const { pagination } = this.state;

      pagination.count = response.result.data.count;
      pagination.next = response.result.data.next;

      this.setState({
        list: response.result.data.results,
        pagination
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { open, data, list, pagination, loading, searched } = this.state;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <h1>Star Wars Character Find</h1>
          <form className={classes.inline}>
            <TextField
              value={this.state.name}
              onChange={this.handleChange}
              className={classes.pr8}
              placeholder='Type the name...'
            />
            <ButtonCustom text={'Search'} handleSubmit={(e: any) => this.handleSubmit(e)} />
          </form>
        </div>

        <div>
          {searched && (
            <CharacterList
              list={list}
              loading={loading}
              handleChangeFilter={this.handleChangeFilter}
              pagination={pagination}
              handleOpen={this.handleOpen}
            />
          )}

          {open && <CharacterDetails isOpen={open} data={data} handleClose={() => this.handleOpen(false, {})} />}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
