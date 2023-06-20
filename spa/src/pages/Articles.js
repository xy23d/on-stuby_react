import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import { Article as  ArticleComponent } from '../components/articles/Article';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import actions from '../stores/history/actions'

export const Articles = (props) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    dispatch(actions.add(location.pathname));
  }, [dispatch, location]);

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
    <>
    {
      articles.map((article) => {
        return <ArticleComponent
          key={article.id}
          id={article.id}
          title={article.title} />
      })
    }
</>
  );
}
