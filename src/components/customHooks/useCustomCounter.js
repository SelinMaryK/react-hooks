import React, {useState} from 'react'

function useCustomCounter(initialVal=0, val) {
    const [count, setCount] = useState(initialVal);
    const incrementCount = () => {
        setCount(prevCount => prevCount+val)
    }
    const decrementCount = () =>{
        setCount(prevCount => prevCount-val)
    }
    const reset = () => {
        setCount(initialVal)
    }

    return [count, incrementCount, decrementCount, reset]
}

export default useCustomCounter
