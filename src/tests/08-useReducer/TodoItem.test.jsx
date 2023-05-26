import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";


describe('Test <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onToggleTodoMock = jest.fn();
    const onDeleteTodoMock = jest.fn();

    // Researt ciertos mocks
    beforeEach(() => {
        onToggleTodoMock.mockClear();
        onDeleteTodoMock.mockClear();
    }); 
    // o tambien todos los que hay
    beforeEach(() => jest.clearAllMocks());

    test('should display pending complete todo item ', () => {
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />);
            
        const h4Element = screen.getByRole('heading', { level: 4 });    

        const liElement = screen.getByRole('listitem');
        
        expect(h4Element.innerHTML).toBe(todo.description);
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(h4Element.className).not.toContain('text-decoration-line-through');
        
    });

    test('should display completed todo item ', () => {
        todo.done = true;
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />);
            
        const h4Element = screen.getByRole('heading', { level: 4 });           
        
        expect(h4Element.className).toContain('text-decoration-line-through');
        
    });

    test('h4 should call to ToggleTodo when clicked', () => {
        
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />);
            
        const h4Element = screen.getByRole('heading', { level: 4 });    
        
        fireEvent.click(h4Element);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);     
        
    });
    test('button should call to DeleteTodo when clicked', () => {
        
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />);
            
        const button = screen.getByRole('button');  
        
        fireEvent.click(button);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);    
        
    });





        

    
});