/* eslint-disable react/prop-types */

const ShowIncrement = ({ increment }) => {
    console.log("Me volvi a generar")

    return (
        <button
            className="btn btn-primary"
            onClick={() => increment(10)}
        >
            Incrementar Valor
        </button>
    )
}

export default ShowIncrement