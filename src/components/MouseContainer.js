import React, {useState} from 'react'
import HookEffectMouse from './HookEffectMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>UnMount Component</button>
            {display && <HookEffectMouse/>}
        </div>
    )
}

export default MouseContainer
