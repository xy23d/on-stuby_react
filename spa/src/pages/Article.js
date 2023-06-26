import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../contexts/Articles";
// import logo from './logo.svg';

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import actions from '../stores/history/actions'

import { Article as ArticleComponent } from "../components/Article"
import ArticlesService from '../services/ArticlesService'

export const Article = (props) => {
  const { id } = useParams();

  const [article, setArticle] = useState(null)

  const { articles, setArticles } = useContext(ArticlesContext);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.add(location.pathname));
  }, [dispatch, location]);

  useSelector(state => console.log(state.historyReducer.histories));

  useEffect(() => {
    if (articles?.[id]) {
      setArticle(articles[id]);
    } else {
      const fetchData = async () => {
        try {
          const article = await ArticlesService.show(id)

          setArticle(article)

          setArticles(prevArticles => ({
            ...prevArticles,
            [id]: article,
          }));
        } catch(error) {
          console.error(`Error: ${error}`);
        }
      };

      fetchData();
    }
  }, [articles, id, setArticles]);

  if (article == null) return null;

  return (
    <>
      <ArticleComponent article={article}/>
    </>
  );
}
