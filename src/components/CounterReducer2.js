import React, {useReducer} from 'react'

const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {...state, firstCounter:state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter:state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter:state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter:state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function CounterReducer2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>First: {count.firstCounter}</h2>
            <h2>Second: {count.secondCounter}</h2>
            <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
            <button onClick={() => dispatch({type:'increment', value:3})}>Increment by 3</button>
            <button onClick={() => dispatch({type:'decrement', value:3})}>Decrement by 3</button>
            <div>
                <button onClick={() => dispatch({type:'increment2', value:10})}>Increment 10</button>
                <button onClick={() => dispatch({type:'decrement2', value:10})}>Decrement 10</button>
            </div>
            <div><button onClick={() => dispatch({type:'reset'})}>Reset</button></div>         
        </div>
    )
}

export default CounterReducer2
