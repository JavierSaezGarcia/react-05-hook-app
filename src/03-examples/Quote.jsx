import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({quote, author}) => {

    const pRef = useRef(); // referencia a un elemento HTML
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 }); // estado inicial

    useLayoutEffect(() => {
      // pRef es un elemento HTML con todos sus metodos y propiedades HTML como current y .getBoundingClientRect()
      console.log(pRef.current.getBoundingClientRect());
      const {width, height} = pRef.current.getBoundingClientRect(); // desestructuracion de objeto width y height de getBoundingClientRect()      
      setBoxSize({width, height}); // seteo de estado    
    }, [quote]); // solo se ejecuta cuando quote cambia

    return (
        <>
            <blockquote 
                className="blockquote text-start"
                style={{ display: 'flex' }}>
                <p ref={pRef} className="mb-3">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
            
        </>

    )
}
