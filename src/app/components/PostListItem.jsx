import React from 'react'
import Icon from '../../images/pen.png'
import { Link } from 'react-router-dom'

const PostListItem = (props) => {

    const { title,id } = props.data

    return (
        <div className="postListItem col-12">
            <div className='postContainerMyPosts'>
                <span className='titleMyPost'>{title}</span>
                <Link to={`/post/${id}`}><img src={Icon} alt="edit" title="Edit Post" /></Link>
            </div>
        </div>
    )
}

export default PostListItem