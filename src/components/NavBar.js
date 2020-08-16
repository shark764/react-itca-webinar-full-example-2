import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContext } from '../context/SearchContext';
import { RecordContext } from '../context/RecordContext';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    marginRight: 48,
    marginLeft: 48,
    width: '36ch',
  },
  searchIcon: {
    padding: '0px 16px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px 8px 8px 0px',
    paddingLeft: 'calc(1em + 32px)',
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    width: '100%',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [, setSearch] = useContext(SearchContext);
  const [, setSelectedRecord] = useContext(RecordContext);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => setSelectedRecord(null)}>
            <Typography variant="h6" color="inherit" noWrap>
              Itca Fepade / ReactJs / Material-UI / Contentful 2020
            </Typography>
          </Button>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => setSearch(event.target.value || '')}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
