/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
const CounterApp = ({ value }) => {
    // useState
    const [counter, setCounter] = useState(value)
    // handleOperations
    const handleAdd = () => setCounter(counter + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value)
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button
                onClick={handleAdd} >
                Sumar +1
            </button>
            <button
                onClick={handleSubtract}>
                Restar -1
            </button>
            <button onClick={handleReset}>
                Reestablecer
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp