import React, { useState, useEffect } from 'react';
import List from '../components/List';
import { getRecords } from '../utils/contentful';

function Main() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const data = await getRecords({
      content_type: 'records',
    });
    console.log('Records fetched from contentful', data);
    setRecords(data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="App-main">
      <List records={records} />
    </div>
  );
}

export default Main;
