
import { useCapitalize } from "../hooks/useCapitalize";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {onResetForm, 
            onInputChange, 
            email, 
            username, 
            password, 
            address, 
            phone} = useForm({

        username: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    });   

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />

            <input
                className="form-control"
                placeholder="Username"
                type="text"
                name="username"
                value={useCapitalize(username)}
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
            <input
                className="form-control mt-2"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <input
                className="form-control mt-2"
                placeholder="Address"
                type="text"
                name="address"
                value={address}
                onChange={onInputChange}
            />
            <input
                className="form-control mt-2"
                placeholder="Phone"
                type="number"
                name="phone"                
                value={phone}
                onChange={onInputChange}
            />


            <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
            

        </>
    )
}
