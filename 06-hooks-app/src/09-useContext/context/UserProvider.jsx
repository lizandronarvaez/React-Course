/* eslint-disable react/prop-types */
import { UserContext } from "./UserContext"

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ saludo: "Hola estoy aprendiendo React, y estoy en la parte del useContenxt" }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider