import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";


describe('Testing useCounter', () => {
    test('should return values by default', () => {
        // valor inicial por defecto es 10 en la funcion
        const { result } = renderHook( () => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
    test('should return value with custom initial value 100', () => {

        const { result } = renderHook( () => useCounter(100));
        const { counter } = result.current;        
        expect(counter).toBe(100);

    });
    test('should return increment value + 1', () => {
        const { result } = renderHook( () => useCounter());
        const { counter, increment } = result.current;        
        
        act(() => {
            /* fire events that update state */
            increment(1);
            increment(10);            
        }); 
        expect(result.current.counter).toBe(21);  
        
    });
    test('should return decrement value - 1', () => {
        const { result } = renderHook( () => useCounter());
        const { decrement } = result.current;        
        
        act(() => {
            /* fire events that update state */
            decrement();
            decrement(5);                  
        }); 
        expect(result.current.counter).toBe(4);  
        
    });
    test('should return initial value with reset function', () => {
        const { result } = renderHook( () => useCounter());
        const { decrement,reset } = result.current;        
        
        act(() => {
            decrement();
            decrement();
            decrement();
            
            /* fire events that update state */
            reset();                  
        }); 
        expect(result.current.counter).toBe(10);  
        
    });
});