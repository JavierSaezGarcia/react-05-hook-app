import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'javier',
        email: 'javier@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, // copia el objeto anterior
            [name]: value // actualiza el valor del campo, name es la clave porque va entre llaves y value es el valor
        });
    }

    // Es buena practica tener cada efecto por separado
    useEffect(() => {
        // console.log('useEffect called!');    
    }, []); // Si ponemos un arreglo vacio como segundo argumento, es para decirle que solo se ejecute UNA VEZ cuando se monta el componente

    useEffect(() => {
        // console.log('FormState changed!');    
    }, [formState]); // Ahora solo muestra el log cuando cambia cualquier elemento del formState

    useEffect(() => {
        // console.log('Email changed!');    
    }, [email]); // Ahora solo muestra el log cuando cambia el email, (obviamente el anterior 'formState' tb se disparara ya que este input es parte del objeto)


    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                className="form-control"
                placeholder="Username"
                type="text"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                className="form-control mt-2"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
            /* En JSX, el código JavaScript se coloca entre llaves ({}) para indicar que se trata de una expresión JavaScript que debe ser evaluada.
            En el caso específico del condicional {(username === 'javier') && <Message />}, el contenido entre llaves se evalúa como una expresión JavaScript.
            Dentro de esta expresión, se verifica si la condición username === 'javier' es verdadera. Si es verdadera, se evalúa la expresión a la derecha de &&, 
            que en este caso es <Message />. Esto permite renderizar el componente <Message /> en la interfaz de usuario.
            La utilización de llaves es necesaria en JSX para diferenciar entre código JavaScript y contenido estático. 
            Al envolver el código JavaScript entre llaves, se indica al compilador de JSX que se debe evaluar esa expresión y utilizar 
            su resultado en la construcción del árbol de elementos del DOM.
             */}
            {
                (username === 'javier') && <Message />

            }

        </>
    )
}
