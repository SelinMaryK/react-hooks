import React, {useState, useEffect } from 'react'
import { log } from 'util';

function HookEffectMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        window.addEventListener('mousemove',logMousePosition);
        console.log('useEffect');
        return() =>{
            console.log('Component unmount');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])
    return (
        <div>
            X: {x}  Y: {y}
        </div>
    )
}

export default HookEffectMouse
