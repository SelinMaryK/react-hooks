import React, {useState, useEffect} from 'react'

function HookEffectCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] =useState('')
    useEffect(() => {
        document.title=`Incremented ${count} times`
        console.log('useEffect');
    },[count])
    const incrementHandler = () =>{
        setCount(prevCount => prevCount+1)
    }
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={incrementHandler}>Increment {count}</button>
        </div>
    )
}

export default HookEffectCounter
