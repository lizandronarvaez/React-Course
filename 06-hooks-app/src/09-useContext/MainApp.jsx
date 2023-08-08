import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import AboutPage from "./AboutPage"
import NavBar from "./NavBar"
import UserProvider from "./context/UserProvider"


const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<Login />} />
                <Route path="about" element={<AboutPage />} />

                {/*PRIMERA FORMA PARA REDICCIONAR SINO ENCUENTRA LA RUTA*/}
                {/* <Route path="/*" element={<ErrorPage />} /> */}

                {/* SEGUNDA FORMA PARA REDIRECCIONAR UNA RUTA SINO LA ENCUENTRA*/}
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </UserProvider>
    )
}

export default MainApp