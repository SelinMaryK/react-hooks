import React, {useReducer,useEffect} from 'react'
import Axios from 'axios'
const initialState={
    post:{},
    error:'',
    isLoading:true
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'SUCCESS':
            return {
                post:action.payload,
                error:'',
                isLoading:false
            }
        case 'ERROR':
            return{
                post:{},
                error:'Error Occurred..!',
                isLoading:false
            }
        default:
            return state
    }
}
function DataFetchUseReducer() {
    const [state, dispatch] = useReducer(reducer,initialState);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then((response)=>{
            console.log(response);
            dispatch({type:'SUCCESS', payload:response.data})
        })
        .catch((error)=>{
            console.log(error);
            dispatch({type:'ERROR'})
        })      
    }, [])
    return (
        <div>
            {state.isLoading? 'Loading...':state.post.body}
            {state.error? state.error: null}
        </div>
    )
}

export default DataFetchUseReducer
