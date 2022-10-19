import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../redux/reducers/apiReducer/apiReducer";
import {apiSelector} from "../redux/reducers/apiReducer/apiSelector";

function ApiDataPage(props) {

    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    //         .catch((error) => console.log(error))
    // },[])
    const posts = useSelector(apiSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div>
            <h1>Api data page</h1>
            {posts.map((post) => {
                return(
                    <div key={post.id}>
                        {post.title}
                    </div>
                )
            })}
        </div>
    );
}

export default ApiDataPage;