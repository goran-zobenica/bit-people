import React from 'react'
import PostsList from './components/PostsList'
import { fetchUserPosts } from "../services/postServices"
import Button from "./components/Button"
import { Link } from 'react-router-dom'
import Loader from './components/Loader'

class MyPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            loading: true,
        }
    }

    componentDidMount() {

        if (localStorage.getItem('userId')) {
            fetchUserPosts(localStorage.getItem('userId'))
                .then(posts => {
                    this.setState({ posts, loading: false });
                })
        }
    }

    render() {
        if (this.state.loading) {
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
                        <Button value='NEW POST' className='newPostButtonMyPosts' onClick={() => { return }} />
                    </Link>
                    <PostsList posts={this.state.posts} />
                </div>
            </div>
        )
    }

}

export default MyPosts