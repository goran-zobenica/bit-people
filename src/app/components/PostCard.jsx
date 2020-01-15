import React from 'react'
import PostPhoto from './PostPhoto'
import AuthorName from './AuthorName'
import CommentsNumber from './CommentsNumber'

const PostCard = (props) => {

    const { imageUrl, title, subtitle, userID, id } = props.data

    return (
        <div className="postCard col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div >
                <div className="imgContainer" >
                    <PostPhoto photo={imageUrl} />
                </div>
                <div className="contentContainer">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                    <hr></hr>
                    <div>Author: <AuthorName id={userID} /> | Comments: <CommentsNumber id={id}/></div>
                </div>
            </div>
        </div>
    )
}

export default PostCard