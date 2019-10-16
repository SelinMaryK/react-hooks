import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataSource() {
    // const [posts, setPosts] = useState([])
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log(response);
            //setPosts(response.data);
            setPost(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])
    return (
        <div>
            <input type='text' value={id} onChange={(event)=>{setId(event.target.value)}}/>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            {/* <ul>
                {posts.map((post)=>
                    <li key={post.id}>{post.title}</li>)}
            </ul> */}
        </div>
    )
}

export default DataSource
