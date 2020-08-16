import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@material-ui/core';
import { SearchContext } from '../context/SearchContext';
import { RecordContext } from '../context/RecordContext';

const NavBar = () => {
  const [, setSearch] = useContext(SearchContext);
  const [, setSelectedRecord] = useContext(RecordContext);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={event => setSelectedRecord(null)}>
            <Typography variant="h6" noWrap>
              Itca Fepade / React Js 2020
            </Typography>
          </Button>
          <div style={{ marginLeft: 32 }}>
            <InputBase
              placeholder="Search…"
              style={{ color: 'inherit' }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => setSearch(event.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
