import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

const SearchProvider = props => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      <>{props.children}</>
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};

export default SearchProvider;
