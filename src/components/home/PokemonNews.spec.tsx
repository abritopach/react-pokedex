import { render, screen } from "@testing-library/react";
import { PokemonNews } from "./PokemonNews";


describe('PokemonNews', () => {

    it('should render a section with a title and a "View All" button', () => {
        render(<PokemonNews />);
        const section = screen.getByRole('region');
        const title = screen.getByRole('heading', { name: /Pokémon News/i });
        const button = screen.getByRole('button', { name: /View All/i });

        expect(section).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    /*
    it('should render a list of 6 NewsItem components', () => {
        render(<PokemonNews />);
        const newsItems = screen.getAllByTestId('news-item');

        expect(newsItems.length).toBe(6);
    });

    it('should display a title and a date in each NewsItem component', () => {
        render(<PokemonNews />);
        const newsItems = screen.getAllByTestId('news-item');

        newsItems.forEach((item) => {
            const title = within(item).getByRole('heading');
            const date = within(item).getByRole('paragraph');

            expect(title).toBeInTheDocument();
            expect(date).toBeInTheDocument();
        });
    });
    */
});