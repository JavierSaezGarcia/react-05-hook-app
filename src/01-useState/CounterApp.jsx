import { useState } from "react"

export const CounterApp = () => {

    
    const [state , setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });
    
    const {counter1, counter2, counter3} = state;

    return (
        <>
            <h1>Counter1: {counter1}</h1>
            <h1>Counter2: {counter2}</h1>
            <h1>Counter3: {counter3}</h1>
            <hr />
            <button 
                className="btn btn-primary btn-md" 
                onClick={() => setCounter({
                    // Cuando queremos acceder a una sola propiedad para operar con ella de un objeto de useState
                    // hay que tener en cuenta que hay que declarar tambien las otras propiedades del objeto
                    ...state, // esto es el resto de las propiedades del objeto
                    counter1: counter1 + 1, // esto tiene que ir despues ya que sobreescribimos la primera propiedad counter1
                                      
                    // counter2, 
                    // counter3
                    
                })}
                >+1</button>
        </>
    )
}
