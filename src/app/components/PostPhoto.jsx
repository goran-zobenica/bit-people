import React from 'react'

const PostPhoto = (props) => {
    return (
        <img src={props.photo} className="picture" alt="Could not be loaded"></img>
    )
}

export default PostPhoto