import { render, screen } from "@testing-library/react";
import { FabItem } from "./FabItem";
import { FabOptions } from "../../../models/fab.model";

describe('FabItem', () => {
    it('should render a button element with class \'fabItem\'', () => {
        render(<FabItem key={FabOptions.Favorite} icon="favorite" title="Test" onPress={() => {}} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});