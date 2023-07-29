import { useContext } from "react"
import { UserContext } from "./context/UserContext";

const HomePage = () => {

    const saludar = useContext(UserContext);

    return (
        <>
            <h1>HomePage</h1>
            <hr />
            {
                saludar.Saludo ? (
                    <>
                        <h1>El saludo existe</h1>
                        <p> {saludar.Saludo}</p>
                    </>
                )
                    : (
                        <p>No existe el saludo</p>
                    )
            }
        </>
    )
}

export default HomePage