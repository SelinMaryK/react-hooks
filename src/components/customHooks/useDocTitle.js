import {useEffect} from 'react'

function useDocTitle(count) {
    useEffect(()=>{
        document.title=`Counter ${count}`
    },[count])
}

export default useDocTitle
