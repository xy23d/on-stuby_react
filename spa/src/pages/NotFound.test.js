import { render, screen, within } from '@testing-library/react';
import NotFound from "./NotFound";
import PageTitle from "../components/common/PageTitle";

jest.mock('../components/common/PageTitle');

describe('pages/NotFound.js', () => {
  test('render', () => {
    render(<NotFound />);

    const div = screen.getAllByRole('generic')[1];
    expect(div).toHaveClass('w-full px-16');

    const p = within(div).getByRole('paragraph');

    expect(p).toHaveClass('text-center')
    expect(p).toHaveTextContent('The page you are looking for does not exist.');


    expect(PageTitle).toHaveBeenCalledWith({ page_title: "404 Not Found" }, {});
  });
});
