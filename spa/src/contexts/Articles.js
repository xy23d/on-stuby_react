import React, { useState, createContext } from "react";

import PropTypes from 'prop-types';

const ArticlesContext = createContext();

const ArticlesProvider = ({children}) => {
  const [articles, setArticles] = useState({})

  return (
    <ArticlesContext.Provider value={{articles, setArticles}}>
      {children}
    </ArticlesContext.Provider>
  );
}

ArticlesProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export default { ArticlesContext, ArticlesProvider }
