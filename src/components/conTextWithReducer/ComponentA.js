import React,{ useContext } from 'react'
import { CountContext } from './ParentContext';

function ComponentA() {
    const countContext = useContext(CountContext);
    return (
        <div>
            COMPONENT A: {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
