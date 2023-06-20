import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Articles } from './pages/Articles';
import { Article } from './pages/Article'
import { ArticlesProvider } from './contexts/Articles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <li>
      <Link to="/articles">Articles</Link>
    </li>

    <ArticlesProvider>
      <Routes>
          <Route element={<Articles />} path="/" />
          <Route element={<Articles />} path="/articles" />
          <Route element={<Article />} path="/articles/:id" />
      </Routes>
    </ArticlesProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
