import { useState } from "react"

const CounterApp = () => {

    const [counters, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2, counter3 } = counters;

    return (
        <>
            <h1>Contador nº1: {counter1} </h1>
            <h1>Contador nº2: {counter2} </h1>
            <h1>Contador nº3: {counter3} </h1>
            <button
                className="btn btn-primary btn-lg"
                onClick={() => setCounter({
                    ...counters,
                    counter1: counter1 + 1
                })}
            >
               Incrementar +1
            </button>
        </>
    )
}

export default CounterApp