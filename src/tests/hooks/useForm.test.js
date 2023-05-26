import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";


describe('testing useForm hook', () => {

    const initialForm = {
        name: 'Javier',
        email: 'javier@gmail.com',
    }

    test('should return an object with the default values', () => {

        const { result } = renderHook(() => useForm(initialForm));
        // una forma de obtener los valores de un objeto
        // const {} = result.current;
        // Otra forma de obtener los valores de un objeto
        // console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('should change the value of the input', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            // 1 forma de hacerlo
            // const event = {
            //     target: {
            //         name: 'name',
            //         value: 'Javier2'
            //     }
            // }
            // onInputChange(event);


            // Forma abreviada
            /* fire events that update state */
            onInputChange({ target: { name: 'name', value: 'Javier2' } });
        });
        expect(result.current.name).toBe('Javier2');
        expect(result.current.formState.name).toBe('Javier2');
    });

    test('should reset the form', () => {   

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {

            onInputChange({ target: { name: 'name', value: 'Javier3' } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });
    
});