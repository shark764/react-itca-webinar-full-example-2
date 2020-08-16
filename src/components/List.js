import React from 'react';
import Item from './Item';
import { Grid } from '@material-ui/core';

const List = props => {
  return (
    <div className="App-list">
      <Grid container spacing={8}>
        {props.records.map(item => {
          return (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={item.id}>
              <Item record={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default List;
