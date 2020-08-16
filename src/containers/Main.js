import React, { useState } from 'react';
import List from '../components/List';

function Main() {
  const [records, setRecords] = useState([]);

  return <List records={records} />;
}

export default Main;
