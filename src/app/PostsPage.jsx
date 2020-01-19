import React, { useState, useEffect } from 'react'
import PostsGrid from './components/PostsGrid'
import SearchBar from './components/SearchBar'
import searchImage from '../images/search.png'
import { fetchPosts } from "../services/postServices"
import Loader from "./components/Loader"

const PostsPage = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        fetchPosts()
            .then(posts => {
                setPosts(posts)
                setLoading(false)
            })
    }, [])

    const getSearchQuery = (searchQuery) => {
        setSearchQuery(searchQuery)
    }

    if (loading) {
        return <Loader />
    }

    const filteredPosts = posts.filter((element) => (element.title + element.subtitle + element.text).toLowerCase().includes(searchQuery))

    return (
        <div className="postsPage row">
            <div className="col">
                <h2> All Posts</h2>
                <img src={searchImage} alt="searchImage" className="searchImage" />
                <SearchBar className="searchBar" onChange={getSearchQuery} />
                <PostsGrid searchQuery={searchQuery} posts={filteredPosts} />
            </div>
        </div>
    )
}

export default PostsPage