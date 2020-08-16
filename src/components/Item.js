import React from 'react';

const Item = props => {
  return (
    <div>
      <p>
        {props.record.id} {' -- '} {props.record.title}
      </p>
    </div>
  );
};

export default Item;
