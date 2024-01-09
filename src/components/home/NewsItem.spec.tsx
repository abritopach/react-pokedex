import { render, screen } from "@testing-library/react";
import { NewsItem } from "./NewsItem";


describe('NewsItem', () => {

    it('should render a New Item component with an image and text', () => {
        render(<NewsItem />);
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByText('Pokémon Rumble Rush Arrive Soon')).toBeInTheDocument();
        expect(screen.getByText('15 May 2019')).toBeInTheDocument();
    });

    it('should display the title of the news item in bold and with a large font size', () => {
        render(<NewsItem />);
        const titleElement = screen.getByText('Pokémon Rumble Rush Arrive Soon');
        expect(titleElement).toHaveClass('text-2xl font-bold tracking-tight text-gray-900 dark:text-white');
    });

    it('should display the date of the news item in normal font size', () => {
        render(<NewsItem />);
        const dateElement = screen.getByText('15 May 2019');
        expect(dateElement).toHaveClass('font-normal text-gray-700 dark:text-gray-400');
    });
});