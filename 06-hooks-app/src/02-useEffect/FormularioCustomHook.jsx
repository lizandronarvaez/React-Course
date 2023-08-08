 
// import { useEffect } from "react"
import useForm from "../hooks/useForm"

const FormularioCustomHook = () => {
    const { formState, onChangeForm, onResetForm } = useForm({
        email: "",
        password: ""
    })

    const { email, password } = formState
    console.log(email,password)
    // useEffect(() => {
    //     // console.log("useEffect llamado!")
    // }, [])

    // useEffect(() => {
    //     console.log("Campo email")
    // }, [email])
    return (
        <>
            <h1 className="text-center">Formulario BootStrap + React</h1>
            <hr />
            <form className="w-50 mx-auto px-5 pt-5 text-center">
                <h2 className="mt-5">Login</h2>
                <input
                    type="text"
                    name="email"
                    className="form-control p-2 mt-5"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={onChangeForm}
                />
                <input
                    type="password"
                    name="password"
                    className="form-control mt-3 p-2"
                    placeholder="Password"
                    value={password}
                    onChange={onChangeForm}
                />
                <button
                    type="submit"
                    className="btn btn-primary mt-4 mx-5 mb-4"
                >
                    Login
                </button>
                <button type="reset"
                    className="btn btn-danger"
                    onClick={onResetForm}
                >
                    Limpiar Campos
                </button>
                <hr />
            </form>
        </>
    )
}

export default FormularioCustomHook