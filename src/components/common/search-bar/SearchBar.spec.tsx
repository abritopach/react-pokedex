import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {

    it('should render a form with a search input field', () => {
        render(<SearchBar onChange={() => {}} />);
        const formElement = screen.getByRole('form');
        const inputElement = screen.getByRole('searchbox');

        expect(formElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    });

    it('should call the onChange function with the input value when the user types', () => {
        const onChangeMock = jest.fn();
        render(<SearchBar onChange={onChangeMock} />);
        const inputElement = screen.getByPlaceholderText('Search Pokemons, Moves, Ability, etc');
        const inputValue = 'pikachu';

        fireEvent.change(inputElement, { target: { value: inputValue } });

        expect(onChangeMock).toHaveBeenCalledWith(inputValue);
    });
});