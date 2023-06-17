/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import UsuarioExiste from "./UsuarioExiste"

const UseEffect = () => {

    const [formState, useFormState] = useState({
        email: "correo@correo.com",
        password: "*************"
    })

    const { email, password } = formState

    const onChangeForm = ({ target }) => {
        const { name, value } = target;
        useFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log("useEffect llamado!")
    }, [])

    useEffect(() => {
        console.log("Campo email")
    }, [email])
    return (
        <>
            <h1>Formulario BootStrap + React</h1>
            <hr />
            <form className=".container">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={onChangeForm}
                />                {
                    (email === "correo@correo.com") && <UsuarioExiste />
                }
                <input
                    type="password"
                    name="password"
                    className="form-control mt-3"
                    placeholder="Password"
                    value={password}
                    onChange={onChangeForm}
                />

            </form>
        </>
    )
}

export default UseEffect