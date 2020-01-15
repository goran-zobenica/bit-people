import React from 'react'
import post from '../images/post.png'
import text from '../images/text.png'
import users from '../images/users.svg'
import { fetchPosts, fetchComments } from '../services/postServices'
import { fetchUsers } from '../services/userServices'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            users: [],
            comments: [],
            loadingPosts: true,
            loadingUsers: true,
            loadingComments: true
        }
    }
    getPosts = () => {
        fetchPosts()
            .then(posts => this.setState({ posts, loadingPosts: false }))
    }
    getUser = () => {
        fetchUsers()
            .then(users => this.setState({ users, loadingUsers: false }))
    }
    getComments = () => {
        fetchComments()
            .then(comments => this.setState({ comments, loadingComments: false }))
    }

    componentDidMount() {
        this.getComments()
        this.getPosts()
        this.getUser()

    }

    render() {

        const Loading = (props) => {
            if (props.flag) { return <span>Loading...</span> }
            return <> </>
        }

        return (
            <div className='row' >
                <div className="col">
                    <h2>Dashboard</h2>
                    <div className='row'>
                        <div className='dashboard col-xl-4' onClick={() => this.props.history.push('/posts')}>
                            <img src={post} className="postPhoto" alt=""></img>
                            <p> <Loading flag={this.state.loadingPosts} />{this.state.posts.length}</p>
                            <p>Total posts</p>
                        </div>
                        <div className='dashboard col-xl-4'>
                            <img src={text} className="textPhoto" alt=""></img>
                            <p><Loading flag={this.state.loadingUsers} />{this.state.comments.length}</p>
                            <p>Total comments</p>
                        </div>
                        <div className='dashboard col-xl-4'>
                            <img src={users} className="usersPhoto" alt=""></img>
                            <p><Loading flag={this.state.loadingComments} />{this.state.users.length}</p>
                            <p>Users</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Dashboard