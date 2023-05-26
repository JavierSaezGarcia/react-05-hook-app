/*
IMPORTANTE!!!!
********** QUE ES UN REDUCER **********
1. Es una funcion común y corriente
2. Debe ser una funcion pura *
3. Debe retornar un nuevo estado
4. Usualmente solo recibe dos argumentos:
    - El valor inicial(initialState) y la acción a ejecutar


****** DEBE SER UNA FUNCION PURA **********
La funcion pura es que:
1. No debe tener efectos secundarios
2. No debe realizar tareas asincronas
3. Debe retornar siempre un estado nuevo
4. No debe llamar a localStorage o SessionStorage ya que 
    estas son funciones externas por tanto seria un efecto secundario
5. No debe de requerir mas que una accion que puede tener un argumento
**************************************************

State ( estado inicial) =====> Pagina o vista =====>    Agrega un nuevo TODO (Action) 
=====> vuelve al reducer donde en este tiene un mapa de todas las acciones a realizar( Agregar, Borrar, Actualizar el state)
=====> vuelve a la Pagina o vista =====>    Actualiza el estado (State)

*/

const initialState = [
    {
        id: 1,
        todo: 'Recolectar piedra del Alma',
        done: false
    }
];


const todoReducer = (state = initialState, action = {}) => {
    // inicializaciones: state es el estado inicial y action es un objeto vacio para que cuando 
    // no se haga ninguna accion, no se rompa el programa

    if (action.type === '[TODO] Add Todo') { // si el tipo de accion no está identificada, no entraria y devolveria el mismo estado inicial A

        return [...state, action.payload]; // si entra, devuelve el ESTADO B que es el estado inicial( objeto initialState desplegado ...state), 
        // y le agrega el nuevo todo que se le llama por norma general 'payload' (carga ítil) pero podemos llamarlo como queramos
    }
    return state; // estado inicial A
}
// Inicializamos el estado
let todos = todoReducer();

// creamos un nuevo todo
const newTodo = {
    id: 2,
    todo: 'Recolectar piedra del Poder',
    done: false
}
// creamos una accion
const addTodoAction = {
    type: '[TODO] Add Todo', // string que nos de la gana pero que sea descriptivo
    payload: newTodo         // nuevo todo que se le llama por norma general 'payload' (carga útil) pero podemos llamarlo como queramos 
}
//  le pasamos a la funcion todoReducer el estado inicial y la accion
todos = todoReducer(todos, addTodoAction);

// NUNCA HAY QUE MUTAR EL STATE OSEA NO PODEMOS HACER ESTO:
// todos.push({
//     id: 2,
//     todo: 'Recolectar piedra del poder',
//     done: false
// });

// Mostramos el array con dos objetos dentro
console.log({ state: todos });
