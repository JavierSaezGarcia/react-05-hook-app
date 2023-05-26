import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // useCallBack memoriza funciones y evita volver a crearlas
    const incrementFather = useCallback(
      (value) => {
        // No vuelve a redibujar porque useCallback memoriza la función 
        // y para useCallBack ocupa el mismo espacio en memoria que es 
        // el espacio que ocupa la funcion. Nota: no memoriza valores, sino funciones
        setCounter( (c) => c + value );
      },
      [],
    );
    // otro uso de useCallBack es con solo cuando una funcion cambie, 
    // que dispare un efecto secundario
    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
