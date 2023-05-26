import { fireEvent,render, screen } from "@testing-library/react";
import { LoginPage } from "../../09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe('test <LoginPage />', () => {
    
    const setUser = jest.fn();  

    test('should display component without user', () => {

        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage />
            </UserContext.Provider>        
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });
    test('should call setUser when button is clicked', () => {        
        
        const user = { id: 123, name: 'Javier', email: 'javier@gmail.com'}
        render(
            <UserContext.Provider value={{user, setUser}}>
                <LoginPage />            
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');          
        fireEvent.click(button);       
        
        expect( setUser ).toHaveBeenCalledWith(user);
        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser ).toHaveBeenCalled();


        });
});