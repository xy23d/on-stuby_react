import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { HOST } from './FetchConfig'
import ArticlesService from './ArticlesService'

describe('services/ArticlesService.js', () => {
  describe('get', () => {
    const articles = [
      {
        "author": "author 1",
        "description": "Description: abcdefg\nhijklmn\nopqrstu\nvwxyz",
        "id": 1,
        "title": "title 1",
        "score": 50
      },
      {
        "author": "author 2",
        "description": "Description: ABCDEFG,HIJKLMN,OPQRSTU,VWXYZ",
        "id": 2,
        "title": "title 2",
        "score": 80

      },
      {
        "author": "author 3",
        "description": "Description: 1234567890",
        "id": 3,
        "title": "title 3",
        "score": 10

      },
    ];

    const server = setupServer(
      rest.get(`${HOST}/articles`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(articles)
        );
      })
    );

    test('get', async () => {
      server.listen();

      expect(await ArticlesService.get()).toEqual(articles)

      server.close()
    });
  });

  describe('show', () => {
    const article = {
      "author": "author 1",
      "description": "Description: abcdefg\nhijklmn\nopqrstu\nvwxyz",
      "id": 1,
      "title": "title 1",
      "score": 50
    };

    const server = setupServer(
      rest.get(`${HOST}/articles/:article_id`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(article)
        );
      })
    );

    test('show', async () => {
      server.listen();

      expect(await ArticlesService.show(article.id)).toEqual(article);

      server.close()
    });
  });
});
