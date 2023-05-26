export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);  // voy a devolver un array con todos los 'todos' que no tengan esta ide 
        case '[TODO] Toggle Todo':
            // Un map regresa un nuevo arreglo que contiene los valores resultantes
            return initialState.map(todo => {
                // Si el todo.id es igual al que tenemos en nuestra accion action.payload
                if (todo.id === action.payload) {
                    return {
                        // retornamos el todo con el estado cambiado
                        ...todo,
                        // y con el done cambiado
                        done: !todo.done
                    }
                }
                return todo;
            }
            );           

        default:
            return initialState;
    }
}
