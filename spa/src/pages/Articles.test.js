import { act, render } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

import Articles from './Articles'
import ArticleComponent from '../components/articles/Article';
import PageTitle from '../components/common/PageTitle'
import addHistory from '../stores/history/actions'
import ArticlesService from '../services/ArticlesService'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-router-dom'),
  useDispatch: jest.fn(),
}));

jest.mock('../components/articles/Article');
jest.mock('../components/common/PageTitle');
jest.mock('../stores/history/actions');
jest.mock('../services/ArticlesService');


describe('pages/Articles.js', () => {
  const pathname = faker.string.sample(10);

  const dispatch = jest.fn();
  const ArticlesServiceGet = jest.fn();

  const articles = Array(3).map((_, index) => {
    return {
      id: faker.number.int(),
      title: faker.string.sample(10)
    }
  });

  const addHistoryReturn = {
    type: 'ADD',
    payload: pathname,
  }

  test('render', async () => {
    useLocation.mockReturnValue({ pathname })
    useDispatch.mockReturnValue(dispatch);
    addHistory.mockReturnValue(addHistoryReturn);

    ArticlesService.get = ArticlesServiceGet.mockResolvedValue(articles);

    await act(async () => {
      render(<Articles />);
    });

    expect(addHistory).toHaveBeenCalledWith(pathname);
    expect(dispatch).toHaveBeenCalledWith(addHistoryReturn);
    expect(ArticlesServiceGet).toHaveBeenCalledTimes(1);
    expect(PageTitle).toHaveBeenCalledWith({page_title: 'Articles'}, {});
    articles.map((article, index) => {
      expect(ArticleComponent).toHaveBeenCalledWith({
        id: article.id,
        title: article.title
      }, {});
    });
  });
});
