import { useState } from "react";
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    // c es el valor acutal del counter, recibido por parametro en la funcion anonima dentro del setCounter
    // con retorno inplicito del valor actual de counter 'c' mas '1'
    const handleAdd = () => setCounter((c) => c + 1)

    const handleSubstract = () => setCounter((c) => c - 1);

    const handleReset = () => setCounter(value);


    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}> -1 </button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

CounterApp.defaultProps = {
    value: 'Numero no Ingresado',
}

