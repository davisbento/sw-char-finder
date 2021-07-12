import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Loader from 'components/Shared/Loader';
import { ICharacter } from 'interfaces/ICharacter';
import { IPagination } from 'interfaces/IPagination';
import { Component, Fragment } from 'react';

interface IProps {
  list: ICharacter[];
  pagination: IPagination;
  handleOpen: any;
  handleChangeFilter: any;
  loading: boolean;
  classes: any;
}

const styles: StyleRules = {
  root: {
    padding: '20px',
    overflowX: 'auto'
  }
};

class TableList extends Component<IProps, any> {
  handleChangePage = (event: any, page: number) => {
    // this.props.pagination.page = página atual
    // page página para qual o usuário está indo
    let filter = '';
    if (page > this.props.pagination.page) {
      filter = this.props.pagination.next;
    } else {
      filter = this.props.pagination.previous;
    }
    this.props.handleChangeFilter(filter, page);
  };

  handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { list = [], pagination, handleOpen, loading, classes } = this.props;
    if (loading) {
      return <Loader />;
    } else if (list.length === 0) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h4>List empty</h4>
        </div>
      );
    }

    return (
      <Fragment>
        <div className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.height}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleOpen(true, item)}>
                      <Icon>visibility</Icon>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          count={pagination.count}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
          page={pagination.page}
          onPageChange={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(TableList);
