import { fireEvent, render } from "@testing-library/react";
import { FabMenuButton } from "./FabMenuButton";

describe('FabMenuButton', () => {

    it('should toggle "is-active" class on menuList element when button is clicked', () => {
        // Arrange
        const mockSetToggleFabMenu = jest.fn();
        const mockToggleFabMenu = false;
        const { getByRole } = render(<FabMenuButton toggleFabMenu={mockToggleFabMenu} setToggleFabMenu={mockSetToggleFabMenu} />);
        const button = getByRole('button');

        // Act
        fireEvent.click(button);

        // Assert
        expect(button.classList.contains('is-active')).toBe(true);
    });

    it('should toggle toggleFabMenu state when button is clicked', () => {
        // Arrange
        const mockSetToggleFabMenu = jest.fn();
        const mockToggleFabMenu = false;
        const { getByRole } = render(<FabMenuButton toggleFabMenu={mockToggleFabMenu} setToggleFabMenu={mockSetToggleFabMenu} />);
        const button = getByRole('button');

        // Act
        fireEvent.click(button);

        // Assert
        expect(mockSetToggleFabMenu).toHaveBeenCalledWith(true);
    });

    it('should render button with correct class and structure', () => {
        // Arrange
        const mockSetToggleFabMenu = jest.fn();
        const mockToggleFabMenu = false;
        const { getByRole } = render(<FabMenuButton toggleFabMenu={mockToggleFabMenu} setToggleFabMenu={mockSetToggleFabMenu} />);
        const button = getByRole('button');

        // Assert
        expect(button).toHaveClass('hamburger-list hamburger--vortex menuList');
        expect(button).toContainHTML('<span class="hamburger-list--box"><span class="hamburger-list-inner"></span></span>');
    });
});