import React, {memo} from 'react'

function Title() {
    console.log('Title Component');
    return (
        <div>
            useCallback
        </div>
    )
}

export default memo(Title)
