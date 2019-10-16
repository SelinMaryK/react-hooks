import React, {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementCounter1 = () =>{
        setCounterOne(counterOne+1);
    }
     const incrementCounter2 = () =>{
         setCounterTwo(counterTwo+1);
     }
     const isOdd = useMemo(() =>{
        let i;
        while(i<200000000000000000)
        i++
        return counterTwo%2 !==0;
    },[counterTwo])

    return (
        <div>
            <div>
                <button onClick={incrementCounter1}>Counter1 {counterOne}</button>
            </div>
            <div>
                <button onClick={incrementCounter2}>Counter2 {counterTwo}</button>
                <span>{isOdd?'Odd':'Even'}</span>
            </div>
        </div>
    )
}

export default Counter
