import { useRef } from "react";


export const PreviousValue = () => {
    const previousValueRef = useRef();

    const handleChange = (event) => {
        console.log('Valor anterior:', previousValueRef.current);
        console.log('Valor actual:', event.target.value);
        previousValueRef.current = event.target.value;        
    };

    return (
        <>
            <div>
                <input className="form-control" onChange={handleChange} />
            </div>
        </>

    );
}
