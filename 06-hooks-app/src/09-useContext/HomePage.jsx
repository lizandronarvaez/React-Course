import { useContext } from "react"
import { UserContext } from "./context/UserContext";

const HomePage = () => {

    const saludar = useContext(UserContext);

    return (
        <>
            <h1>HomePage</h1>
            <hr />
            {
                saludar.saludo ? (
                    <>
                        <h2>El saludo existe</h2>
                        <p aria-label="saludo-label">{saludar.saludo}</p>
                    </>
                )
                    : (
                        <p aria-label="saludo-label">No existe el saludo</p>
                    )
            }
        </>
    )
}

export default HomePage