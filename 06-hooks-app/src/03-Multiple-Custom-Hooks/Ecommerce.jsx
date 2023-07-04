import useCounter from "../hooks/useCounter"
import useFetch from "../hooks/useFetch"
import Loading from "./Loading"
import Products from "./Products"

const Ecommerce = () => {
    const { counter, addCounter, subCounter } = useCounter(1)

    const { state, isLoading } = useFetch(`https://fakestoreapi.com/products/${counter}`)
    const { id, title, image, price } = !!state && state;
    return (
        <>
            <h1>Ecommerce</h1>
            <hr />
            {
                isLoading ?
                    <Loading />
                    :
                    <Products
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                    />
            }
            <button
                className="btn btn-primary m-5"
                onClick={() => subCounter(1)}
                disabled={isLoading}
            >
                Anterior producto
            </button>
            <button
                className="btn btn-primary m-5"
                onClick={() => addCounter(1)}
                disabled={isLoading}
            >
                Siguiente Producto
            </button>
        </>
    )
}

export default Ecommerce