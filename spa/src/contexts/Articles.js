import { useState, createContext } from "react";

// Contextオブジェクトを生成する
export const ArticlesContext = createContext();

// 生成したContextオブジェクトのProviderを定義する
export const ArticlesProvider = ({children}) => {
  const [articles, setArticles] = useState({})

  return (
    <ArticlesContext.Provider value={{articles, setArticles}}>
      {children}
    </ArticlesContext.Provider>
  );
}
