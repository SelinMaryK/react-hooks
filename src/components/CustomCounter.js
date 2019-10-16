import React, {useState} from 'react'
import useCustomCounter from './customHooks/useCustomCounter';

function CustomCounter() {
   const [count, incrementCount, decrementCount, reset] = useCustomCounter(5,5);//indicate initialVal=5 & val=5
    return (
        <div>
            <h2>Count : {count}</h2>
            <div>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CustomCounter
