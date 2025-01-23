import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return(
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Click</button>
        </>
    )
}

export default Counter;