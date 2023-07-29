import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <>
            <h1 className="text-danger">Error pagina no encontrada</h1>
            <Link to={"/"}>
                <button className="btn btn-danger">
                    Volver al inicio
                </button>
            </Link>
        </>
    )
}

export default ErrorPage