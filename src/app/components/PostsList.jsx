import React from 'react'
import PostListItem from '../components/PostListItem'

const PostsList = (props) => {
        return (<div className="postsList row" >{
                props.posts.map(post => {
                    return <PostListItem key={post.id} data={post} />
                })}
            </div>)
    }

export default PostsList