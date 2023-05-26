import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, LoginPage, AboutPage } from "./"
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      
      <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/login" element={ <LoginPage />}/>
        <Route path="/about" element={ <AboutPage />}/>
        <Route path="/*" element={ <Navigate to="/login" />}/>
      </Routes>
    </UserProvider>
  )
}
