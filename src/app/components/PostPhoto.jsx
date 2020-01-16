import React from 'react'

const PostPhoto = (props) => {

    const errorHandler=(e)=>{
        const imageUrl=`https://picsum.photos/id/${Math.floor(Math.random()*9)+1}/300/240`
        
       e.target.src=imageUrl
        }

    return (
        <img src={props.photo} className="picture" onError={errorHandler} alt="Wrong URL"></img>
    )
}

export default PostPhoto