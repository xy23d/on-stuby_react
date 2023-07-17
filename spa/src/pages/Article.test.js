import { act, render, screen, waitFor } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Article from './Article';
import ArticleComponent from "../components/Article"
import { ArticlesContext } from '../contexts/Articles';
import ArticlesService from '../services/ArticlesService'
import addHistory from '../stores/history/actions'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useLocation: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

jest.mock('../components/Article');

jest.mock('../services/ArticlesService');

jest.mock( '../stores/history/actions', () => {
  return jest.fn();
});

describe('pages/Article.js', () => {
  const id = faker.number.int();
  const title = faker.string.sample(10);
  const pathname = faker.string.sample(10);

  const dispatch = jest.fn();
  const setArticles = jest.fn();
  const ArticlesServiceShow = jest.fn();

  const article = {
    id,
    title
  };

  const addHistoryReturn = {
    type: 'ADD',
    payload: pathname,
  }

  beforeEach(() => {
    useParams.mockReturnValue({ id });

    useLocation.mockReturnValue({ pathname })

    useDispatch.mockReturnValue(dispatch);

    addHistory.mockReturnValue(addHistoryReturn);

    ArticlesService.show = ArticlesServiceShow.mockResolvedValue(article);
  });

  test('Context no exists', async () => {
    useContext.mockReturnValue({
      articles: [],
      setArticles
    });

    await act(async () => {
      render(<Article />);
    });

    expect(useContext).toHaveBeenCalledWith(ArticlesContext);
    expect(addHistory).toHaveBeenCalledWith(pathname);
    expect(dispatch).toHaveBeenCalledWith(addHistoryReturn);
    expect(useSelector).toHaveBeenCalledTimes(2);
    expect(ArticlesServiceShow).toHaveBeenCalledWith(id);
    expect(ArticleComponent).toHaveBeenCalledWith({article}, {});
    expect(setArticles).toHaveBeenCalledTimes(1);
  });

  test('Context exists', async () => {
    useContext.mockReturnValue({
      articles: {[id]: article},
      setArticles
    });

    await act(async () => {
      render(<Article />);
    });

    expect(useContext).toHaveBeenCalledWith(ArticlesContext);
    expect(addHistory).toHaveBeenCalledWith(pathname);
    expect(dispatch).toHaveBeenCalledWith(addHistoryReturn);
    expect(useSelector).toHaveBeenCalledTimes(2);
    expect(ArticlesServiceShow).toHaveBeenCalledTimes(0);
    expect(ArticleComponent).toHaveBeenCalledWith({article}, {});
    expect(setArticles).toHaveBeenCalledTimes(0);
  });
});
