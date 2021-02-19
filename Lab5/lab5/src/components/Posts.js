import React, {useState, useEffect} from 'react';
import axios from 'axios';

//defining the constanct 'Posts' 
//using setState to update the information 
const Posts = () => {
    const[posts, setPosts] = useState();

//retrieving the data from the posts api
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            const responsePosts = res.data;
            setPosts(responsePosts);
        });
    }, []);

//setting up the displays for the information and defining which information will be pulled
    return(
        <div> 
            <h1>Posts</h1>
            {posts &&
            posts.map((post) =>{
                const{id, title} = post;
                return(
                    <div key={id}>
                        <h4>{title}</h4>
                        <h5>assinged to user: {id}</h5>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;
