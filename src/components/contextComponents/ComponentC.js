import React, {useContext} from 'react'
import {UserContext, LevelContext} from './ContextData'

function ComponentC() {
    const userData = useContext(UserContext);
    const levelData = useContext(LevelContext);
    return (
        <div>
            <h2>Name: {userData}</h2>
            <h2>Level: {levelData}</h2>
        </div>
    )
}

export default ComponentC
