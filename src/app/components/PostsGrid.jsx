import React from 'react'
import PostCard from '../components/PostCard'

const PostsGrid = (props) => {
    return (
        <div className="postsList row" >{
            props.posts.map(post => <PostCard key={post.id} data={post} />)}
        </div>)
}

export default PostsGrid