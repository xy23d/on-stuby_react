import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Provider as ReduxProvider } from 'react-redux';

import { ArticlesProvider } from './contexts/Articles';
import Articles from './pages/Articles';
import Article from './pages/Article'
import NotFound from './pages/NotFound'
import store from './stores/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <header className="bg-white">
          <nav className="flex items-center justify-center px-8 py-6">
            <div className="flex gap-x-12 items-center justify-center">
              <div className="relative">
                <Link className="text-sm font-semibold leading-6 text-gray-900" to="/articles">Articles</Link>
              </div>
              <div className="relative">
                <Link className="text-sm font-semibold leading-6 text-gray-900" to="/not-found">404 Not Found</Link>
              </div>
            </div>
          </nav>
        </header>

        <ArticlesProvider>
          <Routes>
              <Route element={ <Articles/> } path="/" />
              <Route element={ <Articles/> } path="/articles" />
              <Route element={ <Article/> } path="/articles/:id" />
              <Route element={ <NotFound /> } path="*" />
          </Routes>
        </ArticlesProvider>
      </Router>
    </ReduxProvider>
  );
}

root.render(<App />)
