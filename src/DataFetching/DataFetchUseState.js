import React, { useState, useEffect } from 'react'
import Axios from 'axios';

function DataFetchUseState() {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then((response)=>{
            console.log(response);
            setPost(response.data);
            setError('');
            setIsLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setPost({});
            setError('Error Occurred');
            setIsLoading(false);
        })      
    }, [])
    return (
        <div>
            {isLoading? 'Loading...':post.body}
            {error? error: null}
        </div>
    )
}

export default DataFetchUseState
