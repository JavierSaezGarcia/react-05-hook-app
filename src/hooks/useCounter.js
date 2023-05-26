import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    // useState es una funcion que retorna un arreglo con dos valores, 
    // el primero es la variable a operar y el segundo es la funcion para producir ese cambio
    const [ counter, setCounter ] = useState(initialValue);

    const increment = (value = 1) => { 
        // setCounter es una funcion que actualiza el valor de counter
        setCounter(current => current + value);    
    }
    const decrement = ( value = 1 ) => {
        // Con if tradicional
        // if (counter > 0) {
        //     setCounter(counter - 1);
        // }

        // Con if y return
        // if (counter === 0) return;

        // Con operador ternario
        // setCounter(counter > 0 ? counter - 1 : 0)      

        // con el operador &&
        // counter > 0 && setCounter(counter - value);
        setCounter(current => current - value);    
    }   
        
           
         

    // Si es un objeto lo que envio seria asi y su desestructuracion seria {counter, increment}
    return {
        counter,
        increment,
        decrement,
        reset: () => setCounter(initialValue) // este lo pongo inline para ver que tb se puede asi
    }

    // Si es un array seria asi y la desestructuracion seria [counter, increment]
    // return [
    //     counter,
    // ]
      
}
