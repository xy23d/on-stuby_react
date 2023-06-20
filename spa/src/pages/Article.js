import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../contexts/Articles";
// import logo from './logo.svg';

export const Article = (props) => {
    const { id } = useParams();

    const [article, setArticle] = useState(null)

    const { articles, setArticles } = useContext(ArticlesContext);

    useEffect(() => {
      if (articles?.[id]) {
        setArticle(articles[id]);
      } else {
        const fetchData = async () => {
          try {
            await fetch( `http://localhost:8032/articles/${id}`)
            .then((response) => response.json())
            .then((data) => {
              setArticle(data)

              setArticles(prevArticles => ({
                ...prevArticles,
                [id]: data,
              }));
            });
          } catch (error) {
            console.error('Failed to fetch data:', error);
          }
        };

        fetchData();
      }
    }, [articles, id, setArticles]);

    if (article == null) return null;

    return (
      <>
        <div>{article.id}</div>
        <div>{article.title}</div>
        <div>{article.score}</div>
      </>
  );
}
