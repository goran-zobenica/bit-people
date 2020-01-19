import React, { useState, useEffect } from 'react'
import PostsList from './components/PostsList'
import { fetchUserPosts } from "../services/postServices"
import Button from "./components/Button"
import { Link } from 'react-router-dom'
import Loader from './components/Loader'

const MyPosts = (props) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            fetchUserPosts(localStorage.getItem('userId'))
                .then(posts => {
                    setPosts(posts);
                    setLoading(false);
                })
        }
    }, [])

    if (loading) {
        return (
            <div className="row">
                <div className="col">
                    <Loader />
                </div>
            </div>
        )
    }
    return (
        <div className="row">
            <div className="col">
                <h2>My Posts</h2>
                <Link to="/new_post" >
                    <Button value='NEW POST' className='newPostButtonMyPosts' onClick={() => {}} />
                </Link>
                <PostsList posts={posts} />
            </div>
        </div>
    )
}

export default MyPosts