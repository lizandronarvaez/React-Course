import useCounter from "../hooks/useCounter"

const CounterCustomHook = () => {
    const { counter, addCounter, subCounter, resetCounter } = useCounter()
    return (
        <>
            <h1>Counter App con Custom Hook(Hooks Personalizado)</h1>
            <hr />
            <button className='btn btn-primary' onClick={subCounter}>-1</button>
            <button className='btn btn-danger' onClick={resetCounter}>Reset Counter</button>
            <button className='btn btn-primary' onClick={() => addCounter()}>+1</button>
            <hr />
            <p> El valor del contador es: <span className="display-6">{counter}</span></p>
        </>
    )
}

export default CounterCustomHook