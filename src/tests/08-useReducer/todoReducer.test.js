import { todoReducer } from '../../08-useReducer/todoReducer';

describe('Test todoReducer', () => {

    const initialState = {
        id: 1,
        Description: 'Demo Todo',
        done: false
    };

   

    test('it should return initial state', () => {

        const newState = todoReducer(initialState, {});        
        expect(newState).toBe(initialState);        

    });

    test('it should add todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                Description: 'Nuevo Todo #2',
                done: false
            }
        };
        
       
        const newState = todoReducer([initialState], action);  
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);      

     });

     test('it should remove todo', () => {        
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };       
       
        const newState = todoReducer([initialState], action);  
        expect(newState.length).toBe(0);        

     });

     test('it should toggle todo', () => {        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };      
       
        const newState = todoReducer([initialState], action);  
        expect(newState[0].done).toBeTruthy();  
        
        const newState2 = todoReducer([newState[0]], action);
        expect(newState2[0].done).toBeFalsy();

    });




     
});