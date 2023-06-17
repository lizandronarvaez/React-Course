import { useEffect, useState } from "react"

const UsuarioExiste = () => {

    const [coordenadas, setCoordenadas] = useState({
        x: 0,
        y: 0
    })
    useEffect(() => {
        const onMouseEvent = ({ x, y }) => {
            setCoordenadas({ x, y })
        }

        window.addEventListener("mousemove", onMouseEvent)

        return () => {
            window.removeEventListener("mousemove", onMouseEvent)
        }
    }, [])

    return (
        <>
            <p
                className="mt-2 text-center bg-danger text-white"
            >
                El email ya esta registrado
            </p>
            {JSON.stringify(coordenadas)}
        </>

    )
}

export default UsuarioExiste