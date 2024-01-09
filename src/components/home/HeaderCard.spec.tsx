import { render, screen } from "@testing-library/react";
import { HeaderCard } from "./HeaderCard";
import { LinkProps } from "react-router-dom";

// Mock of React Router Link component.
jest.mock('react-router-dom', () => ({
    Link: ({ to, children }: LinkProps) => <a href={to.toString()}>{children}</a>,
}));

describe('HeaderCard', () => {

    it('should render the Header component with the correct title and no arrow back button', () => {
        render(<HeaderCard />);
        const headerTitle = screen.getByText(/What Pokemon are you looking for?/i);
        const arrowBackButton = screen.queryByTestId('arrow-back-button');
        expect(headerTitle).toBeInTheDocument();
        expect(arrowBackButton).not.toBeInTheDocument();
    });

    it('should render the SearchBar component without errors', () => {
        render(<HeaderCard />);
        const searchBar = screen.getByLabelText(/Search/i);

        expect(searchBar).toBeInTheDocument();
    });

    it('should render the CategoryCard components with the correct category data', () => {
        render(<HeaderCard />);
        const categoryCards = screen.getAllByRole('link', { name: /pokeball/i });

        expect(categoryCards).toHaveLength(6);
        expect(categoryCards[0]).toHaveTextContent(/pokedex/i);
        expect(categoryCards[1]).toHaveTextContent(/moves/i);
        expect(categoryCards[2]).toHaveTextContent(/abilities/i);
        expect(categoryCards[3]).toHaveTextContent(/items/i);
        expect(categoryCards[4]).toHaveTextContent(/locations/i);
        expect(categoryCards[5]).toHaveTextContent(/type effects/i);
    });
});