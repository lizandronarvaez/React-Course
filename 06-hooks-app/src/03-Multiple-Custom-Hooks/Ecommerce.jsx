import useFetch from "../hooks/useFetch"

const Ecommerce = () => {
    const { state, isLoading, hasError } = useFetch("https://fakestoreapi.com/products")
    console.log({ state, isLoading, hasError })
    return (
        <>
            <h1>Ecommerce</h1>
            <hr />
        </>
    )
}

export default Ecommerce