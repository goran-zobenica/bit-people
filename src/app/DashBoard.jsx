import React, { useState, useEffect } from 'react'
import postsIcon from '../images/post.png'
import textIcon from '../images/text.png'
import usersIcon from '../images/users.svg'
import { fetchPosts, fetchComments } from '../services/postServices'
import { fetchUsers } from '../services/userServices'

const Dashboard = (props) => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [loadingPosts, setLoadingPosts] = useState(true)
    const [loadingUsers, setLoadingUsers] = useState(true)
    const [loadingComments, setLoadingComments] = useState(true)

    useEffect(() => {
        getComments()
        getPosts()
        getUser()
    }, [])

    const getPosts = () => {
        fetchPosts()
            .then(posts => {
                setPosts(posts)
                setLoadingPosts(false)
            })
    }

    const getUser = () => {
        fetchUsers()
            .then(users => {
                setUsers(users)
                setLoadingUsers(false)
            })
    }

    const getComments = () => {
        fetchComments()
            .then(comments => {
                setComments(comments)
                setLoadingComments(false)
            })
    }

    const Loading = (props) => {
        if (props.flag) { return <span>Loading...</span> }
        return <> </>
    }

    return (
        <div className='row' >
            <div className="col">
                <h2>Dashboard</h2>
                <div className='row'>
                    <div className='dashboard col-xl-4' onClick={() => props.history.push('/posts')}>
                        <img src={postsIcon} className="postPhoto" alt=""></img>
                        <p> <Loading flag={loadingPosts} />{posts.length}</p>
                        <p>Total posts</p>
                    </div>
                    <div className='dashboard col-xl-4'>
                        <img src={textIcon} className="textPhoto" alt=""></img>
                        <p><Loading flag={loadingUsers} />{comments.length}</p>
                        <p>Total comments</p>
                    </div>
                    <div className='dashboard col-xl-4'>
                        <img src={usersIcon} className="usersPhoto" alt=""></img>
                        <p><Loading flag={loadingComments} />{users.length}</p>
                        <p>Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard