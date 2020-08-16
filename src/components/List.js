import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Item from './Item';

const List = props => (
  <div className="App-list">
    <Grid container spacing={8}>
      {props.records.map(record => (
        <Grid item xs={12} sm={6} lg={4} xl={3} key={record.id}>
          <Item record={record} />
        </Grid>
      ))}
    </Grid>
  </div>
);

List.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

export default List;
