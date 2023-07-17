import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';

import ArticleComponent from '../components/articles/Article';
import PageTitle from '../components/common/PageTitle'
import ArticlesService from '../services/ArticlesService'
import addHistory from '../stores/history/actions'

const Articles = (props) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    dispatch(addHistory(location.pathname));
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
      <main>
        <PageTitle page_title="Articles"></PageTitle>

        <div className="w-full mt-6 px-16">
          <div className="flex flex-wrap">
            {
              articles.map((article) => {
                return (
                  <div className="w-1/3 p-3">
                    <ArticleComponent
                      key={article.id}
                      id={article.id}
                      title={article.title} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default Articles
