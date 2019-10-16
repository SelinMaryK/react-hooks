import React, {memo} from 'react'

function Count({children}) {
    console.log(`Render--Count Comp ${children}`)
    return (
        <div>
            {children}
        </div>
    )
}

export default memo(Count)
