import {useState} from 'react'

function useInputField(initialVal) {
    const [val, setVal] = useState(initialVal)

    const bind = {
        value:val,
        onChange: (event) => setVal(event.target.value)
    } 
    const resetInput = () => {
        setVal(initialVal);
    }
    return [val,bind,resetInput]
}

export default useInputField
