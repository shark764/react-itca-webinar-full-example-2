import React, { useState, useEffect, useContext, useCallback } from 'react';
import List from '../components/List';
import { getRecords } from '../utils/contentful';
import { SearchContext } from '../context/SearchContext';
import { RecordContext } from '../context/RecordContext';
import { Slide } from '@material-ui/core';
import Detail from '../components/Detail';

function Main() {
  const [records, setRecords] = useState([]);
  const [search] = useContext(SearchContext);
  const [selectedRecord] = useContext(RecordContext);

  const fetchRecords = useCallback(async () => {
    const entries = await getRecords({
      content_type: 'records',
      'fields.title[match]': search,
    });

    console.log(`%cCourses fetched using... "${search}":`, 'background: #ccc; color: #444;', entries);

    setRecords(entries);
  }, [search]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  return (
    <div className="App-main">
      {!selectedRecord ? (
        <Slide direction="right" in={!selectedRecord} mountOnEnter unmountOnExit timeout={{ enter: 250, exit: 250 }}>
          <div>
            <List records={records} />
          </div>
        </Slide>
      ) : null}

      {selectedRecord ? (
        <Slide
          direction="left"
          in={selectedRecord !== null}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 250, exit: 250 }}
        >
          <div>
            <Detail />
          </div>
        </Slide>
      ) : null}
    </div>
  );
}

export default Main;
