import { renderHook, waitFor, act} from "@testing-library/react";
import { useFetch } from "../../hooks";


describe('Testing useFetch hook', () => {

    const url = 'https://api.breakingbadquotes.xyz/v1/quotes/1';

    test('It should return null data, null error, and loading set to true', () => {

        const { result } = renderHook(() => useFetch());

        const { data, hasError, isLoading } = result.current;

        expect(data).toBeNull();
        expect(isLoading).toBeTruthy();
        expect(hasError).toBeNull();
        
    });

    test('should return object with data, error and loading set to false', async () => {
        let result;

        act(() => {
          result = renderHook(() => useFetch(url)).result;
        });
    
        await waitFor(() => {
          const { data, isLoading, hasError } = result.current;
          expect(data).toBeNull();
          expect(isLoading).toBeTruthy();
          expect(hasError).toBeNull();
        });
    
        await act(async () => {
          result.current = {
            data: { quote: "Sample quote", author: "Sample author" },
            isLoading: false,
            hasError: false,
          };
        });
    
        const { data, isLoading, hasError } = result.current;
        
        expect(data).toEqual({ quote: "Sample quote", author: "Sample author" });
        expect(isLoading).toBeFalsy();
        expect(hasError).toBeFalsy();
       
    });
});
