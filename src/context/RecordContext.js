import React, { createContext, useState } from 'react';

export const RecordContext = createContext();

const RecordProvider = props => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  return (
    <RecordContext.Provider value={[selectedRecord, setSelectedRecord]}>
      <>{props.children}</>
    </RecordContext.Provider>
  );
};

export default RecordProvider;
