import { CategoryCard } from "./CategoryCard";
import { render, screen } from "@testing-library/react";
import { LinkProps } from 'react-router-dom';

// Mock of React Router Link component.
jest.mock('react-router-dom', () => ({
    Link: ({ to, children, style }: LinkProps) => <a href={to.toString()} style={style}>{children}</a>,
}));

describe('CategoryCard', () => {

    it('should render a Link component with the correct route and background color', () => {
        // Arrange
        const category = {
            name: 'Test Category',
            route: '/test-category',
            color: 'red'
        };

        // Act
        render(<CategoryCard category={category} />);

        // Assert
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', '/test-category');
        expect(linkElement).toHaveStyle({ backgroundColor: 'red' });
    });

    it('should render two img elements', () => {
        // Arrange
        const category = {
            name: 'Test Category',
            route: '/test-category',
            color: 'red'
        };

        // Act
        render(<CategoryCard category={category} />);

        // Assert
        const imgElements = screen.getAllByRole('img');
        expect(imgElements.length).toBe(2);
    });

    it('should render the correct PokeBall images based on the category prop', () => {
        // Arrange
        const category = {
            name: 'Test Category',
            route: '/test-category',
            color: 'red'
        };

        // Act
        render(<CategoryCard category={category} />);

        // Assert
        const pokeballImages = screen.getAllByAltText('Pokeball');
        expect(pokeballImages[0]).toHaveClass('pokeball1');
        expect(pokeballImages[1]).toHaveClass('pokeball2');
    });
});
