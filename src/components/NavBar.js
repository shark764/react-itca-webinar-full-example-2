import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Itca Fepade / React Js 2020
          </Typography>
          <div style={{ marginLeft: 32 }}>
            <InputBase placeholder="Search…" style={{ color: 'inherit' }} inputProps={{ 'aria-label': 'search' }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
