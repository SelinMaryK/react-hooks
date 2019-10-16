import React, { useState } from 'react'

function HookCounter3() {
    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <form>
                <input type='text' 
                value={name.firstName} onChange={(event)=>setName({...name, firstName:event.target.value})}/>
                <input type='text' 
                value={name.lastName} onChange={(event)=>setName({...name, lastName:event.target.value})}/>
                <h3>First Name: {name.firstName}</h3>
                <h3>Last Name: {name.lastName}</h3>
                <h3>{JSON.stringify(name)}</h3>
            </form>
        </div>
    )
}

export default HookCounter3
