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

import { Provider as ReduxProvider } from 'react-redux';

import logo from './logo.svg';

import { ArticlesProvider } from './contexts/Articles';
import { Articles } from './pages/Articles';
import { Article } from './pages/Article'
import store from './stores/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <header className="bg-white">
          <nav className="mx-auto flex max-w-7xl items-center p-6 px-8">
            <div className="flex flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">xy2</span>
                <img className="h-8 w-auto" src={logo} alt="Logo" />
              </a>
            </div>
            <div className="flex gap-x-12">
              <div className="relative">
                <Link className="text-sm font-semibold leading-6 text-gray-900" to="/articles">Articles</Link>
              </div>
              <div className="relative">
                <Link className="text-sm font-semibold leading-6 text-gray-900" to="/articles">Test</Link>
              </div>
            </div>
            <div className="flex flex-1"></div>
          </nav>
        </header>

        <ArticlesProvider>
          <Routes>
              <Route element={<Articles />} path="/" />
              <Route element={<Articles />} path="/articles" />
              <Route element={<Article />} path="/articles/:id" />
          </Routes>
        </ArticlesProvider>
      </Router>
    </ReduxProvider>
  );
}

root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
