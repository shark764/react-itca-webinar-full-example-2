import React from 'react';

const Item = props => {
  return (
    <div>
      <p>
        {props.id} {' -- '} {props.title}
      </p>
    </div>
  );
};

export default Item;
