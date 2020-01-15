import React from 'react'
import PostsGrid from './components/PostsGrid'
import SearchBar from './components/SearchBar'
import searchImage from '../images/search.png'
import { fetchPosts } from "../services/postServices"
import Loader from "./components/Loader"

class PostsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            loading: true,
            searchQuery: "",
        }
    }

    componentDidMount() {
        fetchPosts()
            .then(posts => {
                this.setState({ posts, loading: false });
            })
    }

    getSearchQuery = (searchQuery) => {
        this.setState({ searchQuery })

    }

    render() {

        if (this.state.loading) {
            return <Loader />
        }

        const filteredPosts = this.state.posts.filter((element) => (element.title + element.subtitle + element.text).toLowerCase().includes(this.state.searchQuery))

        return (
            <div className="postsPage row">
                <div className="col">
                    <h2> All Posts</h2>
                    <img src={searchImage} alt="searchImage" className="searchImage" />
                    <SearchBar className="searchBar" onChange={this.getSearchQuery} />
                    <PostsGrid searchQuery={this.state.searchQuery} posts={filteredPosts} />
                </div>
            </div>
        )
    }

}

export default PostsPage