import { useEffect } from 'react';
import { useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';

// inicializamos el estado de nuestro estado de la aplicacion, en este caso esta vacía
const initialState = [];

// Si tenemos almacenados en localStoragetodos, lo pasamos a la funcion initStorage
const initStorage = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    // todoReducer es la funcion con el switch de acciones que vamos a realizar
    // initialState es el estado inicial de nuestro estado de la aplicacion
    // dispatch es la funcion que nos permite disparar las acciones que vamos a realizar
    // todos son los objetos actuales de nuestra aplicacion, por defecto es state
    const [todos, dispatch] = useReducer(todoReducer, initialState, initStorage);
    
    useEffect(() => {       
        localStorage.setItem('todos', JSON.stringify(todos)); 
    // Guardamos el estado de nuestra la aplicacion en el local storage CADA VEZ QUE CAMBIE EL ESTADO DE NUESTRA APLICACION 'TODOS       
    }, [todos]) // Cuando los todos cambian, se ejecuta el useEffect
    
    
    
    const handleNewTodo = (todo) => {
        // Otra forma
        // dispatch({
        //     type: '[TODO] Add Todo',
        //     payload: todo
            
        // });
        // Creamos la accion que vamos a disparar
        const action = {
            type: '[TODO] Add Todo', // Nombre de la accion
            payload: todo // Payload que vamos a enviar ( carga útil )

        }
        // Disparamos la accion        
        dispatch(action);
    }
    const handleRemoveTodo = (id) => {
        // una forma....
        // dispatch({
        //     type: '[TODO] Remove Todo',
        //     payload: id
        // })
        // Otra forma....
        const action = {    
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        // console.log({id});
        // una forma....
        // dispatch({
        //     type: '[TODO] Toggle Todo',
        //     payload: id
        // })
        // Otra forma....
        const action = {    
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action)
    }

    const pendientes = todos.filter(todo => !todo.done).length;
    const completados = todos.filter(todo => todo.done).length;
  return {
    todos,    
    pendientes,
    completados,
    handleToggleTodo,
    handleRemoveTodo,
    handleNewTodo
    
  }
}
