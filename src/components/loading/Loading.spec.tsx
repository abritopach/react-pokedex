import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe('Loading', () => {

    it('should render a figure element with class \'loader\'', () => {
        render(<Loading />);
        const figureElement = screen.getByRole('figure', { className: 'loader' });
        expect(figureElement).toBeInTheDocument();
    });

    it('should render a figcaption element with text \'Loading ...\'', () => {
        render(<Loading />);
        const figcaptionElement = screen.getByText('Loading ...');
        expect(figcaptionElement).toBeInTheDocument();
    });
});