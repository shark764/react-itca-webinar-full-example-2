import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecordContext = createContext();

const RecordProvider = props => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  return (
    <RecordContext.Provider value={[selectedRecord, setSelectedRecord]}>
      <>{props.children}</>
    </RecordContext.Provider>
  );
};

RecordProvider.propTypes = {
  children: PropTypes.node,
};

export default RecordProvider;
