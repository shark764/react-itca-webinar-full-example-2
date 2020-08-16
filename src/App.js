import React from 'react';

import './App.css';
import Main from './containers/Main';
import NavBar from './components/NavBar';

import SearchProvider from './context/SearchContext';
import RecordProvider from './context/RecordContext';

function App() {
  return (
    <SearchProvider>
      <RecordProvider>
        <NavBar />
        <Main />
      </RecordProvider>
    </SearchProvider>
  );
}

export default App;
