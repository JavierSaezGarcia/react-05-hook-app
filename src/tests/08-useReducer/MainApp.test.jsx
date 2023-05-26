import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

MemoryRouter
describe("Test <MainApp />", () => {

  test("Render de MainApp", () => {
    render(
      <MemoryRouter>  
        <MainApp />
      </MemoryRouter>    
    
    );
    // screen.debug();

    expect(screen.getByText("HomePage")).toBeTruthy();
    
  
  });
  test("should show LoginPage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>  
        <MainApp />
      </MemoryRouter>    
    
    );
    expect(screen.getByText('LoginPage')).toBeTruthy();    
  
  });
  test("should show AboutPage", () => {
    render(
      <MemoryRouter initialEntries={['/about']}>  
        <MainApp />
      </MemoryRouter>    
    
    );
    expect(screen.getByText('AboutPage')).toBeTruthy();    
  
  });

});