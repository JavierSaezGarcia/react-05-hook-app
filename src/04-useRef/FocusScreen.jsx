import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const onClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref = {inputRef}
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese su nombre"
                name="" />
            <input
            
                type="text"
                className="form-control"
                placeholder="Ingrese su apellido"
                name="" />
            <button
                className="btn btn-primary mt-2"
                type="button"
                onClick={onClick}>Set focus</button>
        </>
    )
}
