import { useState } from "react";

// Hook para manejar los formularios
export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, // copia el objeto anterior
            [name]: value // actualiza el valor del campo, name es la clave porque va entre llaves y value es el valor
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState, // no es necesario ya que ya enviamos el objeto desestructurado '...formState'
        onInputChange,
        onResetForm,
    }
}
