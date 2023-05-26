import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodos } from "../../hooks/useTodos";


jest.mock('../../hooks/useTodos');

describe('Tests in <TodoApp />', () => {

    test('should display correctly', () => {

        useTodos.mockReturnValue({
            todos: [
                { id: 1, description: 'Todo 1', done: false },
                { id: 2, description: 'Todo 2', done: true }
            ],
            pendientes: 1,
            completados: 1,
            handleNewTodo: jest.fn(),
            handleRemoveTodo: jest.fn(),
            handleToggleTodo: jest.fn()

        });


        render(<TodoApp />);
        // screen.debug();
        expect( screen.getByText('Todo 1') ).toBeTruthy();
        expect( screen.getByText('Todo 2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
        expect( screen.getByRole('textbox').name).toBe('description');
        

    });
});