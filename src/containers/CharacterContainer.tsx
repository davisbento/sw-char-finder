import CharacterDetails from 'components/Characters/CharacterDetails';
import CharacterList from 'components/Characters/CharacterList';
import { listAllCharacters } from 'helpers/api';
import { IPagination } from 'interfaces/IPagination';
import { Component } from 'react';

interface IProps {}

interface IState {
  list: any[];
  data: any;
  pagination: IPagination;
  open: boolean;
  loading: boolean;
}

class Character extends Component<IProps, IState> {
  readonly state: IState = {
    list: [],
    pagination: {
      count: 0,
      page: 0,
      next: '',
      previous: ''
    },
    data: {},
    open: false,
    loading: true
  };

  handleOpen = (open: boolean, data: any) => {
    this.setState({ open, data });
  };

  handleChangeFilter = async (filter: string = '', page: number = 0) => {
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

  componentDidMount() {
    this.handleChangeFilter();
  }

  render() {
    const { open, data, list, pagination, loading } = this.state;
    return (
      <div>
        <CharacterList
          list={list}
          loading={loading}
          handleChangeFilter={this.handleChangeFilter}
          pagination={pagination}
          handleOpen={this.handleOpen}
        />

        {open && <CharacterDetails isOpen={open} data={data} handleClose={() => this.handleOpen(false, {})} />}
      </div>
    );
  }
}

export default Character;
