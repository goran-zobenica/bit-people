import React, { useState, useEffect } from 'react'
import { fetchPostComments } from '../../services/postServices'

const CommentsNumber = (props) => {
    const [totalComments, setTotalComments] = useState("loading");
    useEffect(
        () => {
            fetchPostComments(props.id).then(totalComments => setTotalComments(totalComments))
        }, [props.id])

    if (totalComments === "loading") { return <div className="circleLoader"></div> }

    return (
        <span>{totalComments}</span>
    )
}

export default CommentsNumber