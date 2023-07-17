import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { ArticlesContext } from "../contexts/Articles";
import ArticleComponent from "../components/Article"
import ArticlesService from '../services/ArticlesService'
import addHistory from '../stores/history/actions'

const Article = (props) => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

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
          const article = await ArticlesService.show(id);

          setArticle(article);

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
      <div className="w-full mt-6 px-16" data-testid="debug">
        <ArticleComponent article={article}/>
      </div>
    </main>
    : null
  );
}

export default Article
