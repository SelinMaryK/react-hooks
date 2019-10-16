import React,{useState, useEffect, useRef} from 'react'

function UseRefHookTimer() {
    const [timer, setTimer] = useState(0);
    const timerRef = useRef();
    useEffect(()=>{
        timerRef.current = setInterval(()=>{
            setTimer(prevVal => prevVal+1)
        },1000)
        return()=>{
            clearInterval(timerRef.current)
        }
    },[])

    return (
        <div>
            TIMER: {timer}
            <div>
                <button onClick={()=>clearInterval(timerRef.current)}>Stop</button>
            </div>
        </div>
    )
}

export default UseRefHookTimer
