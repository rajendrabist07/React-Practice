import React, { useState, useEffect } from 'react'

const API = () => {

    const [state, setState] = useState([]);

    const fatchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();

        setState(result.products)
    }

    useEffect(() => {
        fatchData()
    }, [])


    return (
        <div className='Api-box'>
            {state.map((post, index) => {
                return (
                    <div className='result-box' key={index}>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                        <p>Description: {post.description}</p>
                        <div className="image-box">
                            <img src={post.images} alt={post.images} />
                        </div>

                    </div>
                )
            })}
        </div>
    )
}


export default API