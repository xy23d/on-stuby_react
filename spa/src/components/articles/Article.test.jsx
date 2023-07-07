import { render, screen, within } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Link } from "react-router-dom";
import Article from "./Article";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn()
}));

describe('components/articles/Article.js', () => {
  describe('render', () => {
    const id = faker.number.int();
    const title = faker.string.sample(10)

    beforeEach(() => {
      render(<Article key={id} id={id} title={title} />);
    });

    test('h3', () => {
      const div_3 = screen.getByTestId('div_3');
      const h3 = within(div_3).getByRole('heading');
      expect(h3).toHaveTextContent(title);
    });

    test('Link', () => {
      const expected = {
        children: 'GoTo',
        className: 'font-bold inline-block max-w-full border-solid border-2 rounded-[30px] px-10 py-2 border-[transparent] text-white bg-sky-500',
        to: `/articles/${id}`
      };

      expect(Link).toHaveBeenCalledWith(expected, {});
    });
  });
});
