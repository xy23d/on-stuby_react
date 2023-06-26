import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { Article as  ArticleComponent } from '../components/articles/Article';
import ArticlesService from '../services/ArticlesService'
import actions from '../stores/history/actions'

export const Articles = (props) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    dispatch(actions.add(location.pathname));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await ArticlesService.get()
        setArticles(articles)
      } catch (error) {
        console.error(`Error: ${error}`);
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
