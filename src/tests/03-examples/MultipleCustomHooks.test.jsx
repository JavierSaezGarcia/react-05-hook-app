import { render, screen, fireEvent } from "@testing-library/react";
import { waitFor } from '@testing-library/dom';
import { MultipleCustomHooks } from "../../03-examples";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');



describe('Name of the group', () => {

    // const url = 'https://api.breakingbadquotes.xyz/v1/quotes/1';

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should display the component by default', () => {


        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));

        expect(screen.getByText('Breaking Bad quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();

    });

    test('should display a quote', async () => {

        const returnedValue = { author: 'Javier', quote: 'Hola' };

        useFetch.mockReturnValue({
            data: [returnedValue],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        await waitFor(() => {
            expect(screen.getByText('Hola')).toBeTruthy();
            expect(screen.getByText('Javier')).toBeTruthy();
            const nextButton = screen.getByRole('button', { name: 'Next Quote' });
            expect(nextButton.disabled).toBeFalsy();
        });
    });

    test('should increment the counter', () => {
        
        useFetch.mockReturnValue({
            data: [{ author: 'Javier', quote: 'Hola' }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);
        // como hacer una evaluacion
        expect(mockIncrement).toHaveBeenCalled();

    });
});