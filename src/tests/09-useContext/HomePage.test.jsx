import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe('Test <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Javier',
        email: 'javier@gmail.com'
    }

    test('should display the component without user', () => {
        
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>        
        );
        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).not.toBe('null');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.email);
        // screen.debug();
    });
});