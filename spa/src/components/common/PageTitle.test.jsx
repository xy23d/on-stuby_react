import { render, screen, within } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import PageTitle from './PageTitle';

describe('components/common/PageTitle.jsx', () => {
  describe('render', () => {
    const page_title = faker.string.sample(10);

    beforeEach(() => {
      render(<PageTitle page_title={page_title} />);
    });

    test('h2', () => {
      const h2 = screen.getByRole('heading');
      expect(h2).toHaveTextContent(page_title);
    });
  });
});
