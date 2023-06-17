import { useState } from "react"

const useCounter = (defaultValue = 10) => {
    const [counter, setCounter] = useState(defaultValue);

    const addCounter = (value = 1) => setCounter(counter + value)
    const resetCounter = () => setCounter(defaultValue)
    const subCounter = () => {
        counter <= 0 ?
            null
            : setCounter(counter - 1)
    }
    return {
        counter,
        addCounter,
        subCounter,
        resetCounter
    }
}


export default useCounter