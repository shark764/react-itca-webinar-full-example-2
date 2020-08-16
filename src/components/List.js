import React from 'react';
import Item from './Item';

const List = props => {
  return (
    <div>
      <p>Here is a list of items</p>

      {props.records.map(item => {
        return <Item key={item.id} record={item} />;
      })}
    </div>
  );
};

export default List;
