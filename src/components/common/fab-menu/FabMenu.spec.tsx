import { render, screen } from "@testing-library/react";
import { FabMenu } from "./FabMenu";
import { FabItemProps } from "../../../models/fab.model";

describe('FabMenu', () => {

    it('should render a button with a hamburger icon', () => {
        // Arrange
        const items: FabItemProps[] = [];
        const onPress = jest.fn();

        // Act
        render(<FabMenu items={items} onPress={onPress} />);

        // Assert
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveClass('hamburger-list');
    });

    /*
    it('should toggle the visibility of the menu when the button is clicked', () => {
        // Arrange
        const items: FabItemProps[] = [];
        const onPress = jest.fn();

        render(<FabMenu items={items} onPress={onPress} />);

        // Act
        userEvent.click(screen.getByRole('button'));

        // Assert
        expect(screen.getByRole('button')).toHaveClass('is-active');
        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');

        // Act
        userEvent.click(screen.getByRole('button'));

        // Assert
        expect(screen.getByRole('button')).not.toHaveClass('is-active');
        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    });

    it('should display a list of items when the menu is toggled', () => {
        // Arrange
        const items: FabItemProps[]  = [
        { key: FabOptions.Favorite, title: 'Item 1', icon: 'favorite', onPress: () => {}},
        { key: FabOptions.Generation, title: 'Item 2', icon: 'bolt', onPress: () => {} },
        ];
        const onPress = jest.fn();

        render(<FabMenu items={items} onPress={onPress} />);

        // Act
        userEvent.click(screen.getByRole('button'));

        // Assert
        expect(screen.getByRole('article')).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
    */
});