import { render, screen, within } from '@testing-library/react';
import Article from "./Article";
import { Link } from "react-router-dom";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn()
}));

describe('components/articles/Article.js', () => {
  describe('render', () => {
    const id = 1
    const title = 'test'

    beforeEach(() => {
      render(<Article key={id} id={id} title={title} />);
    });

    test('div_1', () => {
      const div_1 = screen.getByTestId('div_1');
      expect(div_1).toHaveClass('bg-gradient-to-r from-sky-500 p-0.5 rounded-[10px] to-indigo-500');
    });

    test('div_2', () => {
      const div_2 = screen.getByTestId('div_2');
      expect(div_2).toHaveClass('bg-white flex flex-col rounded-[8px]');
    });

    test('div_3', () => {
      const div_3 = screen.getByTestId('div_3');
      expect(div_3).toHaveClass('mt-5 px-10');
    });

    test('h3', () => {
      const div_3 = screen.getByTestId('div_3');
      const h3 = within(div_3).getByRole('heading');
      expect(h3).toHaveClass('font-bold text-2xl normal-case');
      expect(h3).toHaveTextContent(title);
    });

    test('div_4', () => {
      const div_4 = screen.getByTestId('div_4');
      expect(div_4).toHaveClass('mt-11 mb-3 text-center');
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
