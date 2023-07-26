import { render, screen, within } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import Article from './Article';

describe('spa/src/components/Article.jsx', () => {
  describe('render', () => {
    const description_1 = faker.string.sample(10);
    const description_2 = faker.string.sample(10);
    const article = {
      title: faker.string.sample(10),
      author: faker.person.fullName(10),
      description: `${description_1}\n${description_2}`,
    };

    beforeEach(() => {
      render(<Article article={article} />);
    });

    test('h1', () => {
      const h1 = screen.getByRole('heading');
      expect(h1).toHaveTextContent(article.title);
    });

    test('div', () => {
      const div = screen.getByTestId('div_author');
      expect(div).toHaveTextContent(`by ${article.author}`);
    });

    test('p', () => {
      const ps = screen.getAllByRole('paragraph');

      expect(ps[0]).toHaveTextContent(description_1);
      expect(ps[1]).toHaveTextContent(description_2);
    });
  });
});
