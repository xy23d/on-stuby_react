import React, { useEffect, useState } from "react";
// import logo from './logo.svg';

import { Article } from "./Article";

export const Articles = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch('http://localhost:8032/articles')
        .then((response) => response.json())
        .then((data) => setArticles(data));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // <header className="Top-header">
    //     <img src={logo} className="Top-logo" alt="logo" />
    // </header>
    <>
        {
          articles.map((article) => {
            return <Article
              key={article.id}
              id={article.id}
              title={article.title} />
          })
        }
    </>
  );
}
