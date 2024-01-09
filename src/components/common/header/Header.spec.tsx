import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { LinkProps } from "react-router-dom";

// Mock of React Router Link component.
jest.mock('react-router-dom', () => ({
    Link: ({ to, children }: LinkProps) => <a href={to.toString()} data-testid="arrow-back-button">{children}</a>,
}));

describe('Header', () => {

    it('should render a header component with a title and pokeball image', () => {
        // Arrange
        const props = {
            title: 'Test Title',
        };

        // Act
        render(<Header {...props} />);

        // Assert
        expect(screen.getByAltText('Pokeball image')).toBeInTheDocument();
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should not render an arrow back button by default', () => {
        // Arrange
        const props = {
            title: 'Test Title',
        };

        // Act
        render(<Header {...props} />);

        // Assert
        expect(screen.queryByTestId('arrow-back-button')).not.toBeInTheDocument();
    });

    it('should render an arrow back button when showArrowBack prop is true', () => {
        // Arrange
        const props = {
            title: 'Test Title',
            showArrowBack: true,
        };

        // Act
        render(<Header {...props} />);

        // Assert
        expect(screen.getByTestId('arrow-back-button')).toBeInTheDocument();
    });
});