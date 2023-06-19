import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import logo from './logo.svg';

export const Article = (props) => {
    const { id } = useParams();

    const [article, setArticle] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            await fetch( `http://localhost:8032/articles/${id}`)
            .then((response) => response.json())
            .then((data) => setArticle(data));
          } catch (error) {
            console.error('Failed to fetch data:', error);
          }
        };

        fetchData();
      }, []);

    if (article == null) return null;


     return (
        <>
            <div>{article.id}</div>
            <div>{article.title}</div>
            <div>{article.score}</div>
        </>
    );
}
