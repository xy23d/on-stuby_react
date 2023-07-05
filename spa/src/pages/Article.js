import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../contexts/Articles";
// import logo from './logo.svg';

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import addHistory from '../stores/history/actions'

import * as ArticleComponent from "../components/Article"
import ArticlesService from '../services/ArticlesService'

const Article = (props) => {
  const { id } = useParams();

  const [article, setArticle] = useState(null)

  const { articles, setArticles } = useContext(ArticlesContext);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addHistory(location.pathname));
  }, []);

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
  }, []);

  return (
    article ?
    <main>
      <div className="w-full mt-6 px-16">
        <ArticleComponent article={article}/>
      </div>
    </main>
    : null
  );
}

export default Article
