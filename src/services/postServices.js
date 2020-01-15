import { http } from './HttpServices'
import Post from "../entities/Post"

export const fetchPosts = (id = "") => {
    const requestUrl = `http://crud-api.hypetech.xyz/v1/posts/${id}`
    return http.get(requestUrl)
        .then(postData => postData.map(postData => new Post(postData)))
}

export const fetchSinglePost = (id, token) => {
    const requestUrl = `http://crud-api.hypetech.xyz/v1/posts/${id}`
    return http.get(requestUrl)
}

export const fetchUserPosts = (id) => {
    const requestUrl = `http://crud-api.hypetech.xyz/v1/posts?userId=${id}`
    return http.get(requestUrl)
        .then(postData => postData.map(postData => new Post(postData)))
}

export const fetchComments = () => {
    return http.get("http://crud-api.hypetech.xyz/v1/comments")
        .then(commentData => { return commentData })
}

export const fetchPostComments = (id) => {
    const url = `http://crud-api.hypetech.xyz/v1/posts/${id}/comments`
    return http.get(url)
        .then(comments => { return comments.length })
}

export const createPost = (data, token) => {
    const url = "http://crud-api.hypetech.xyz/v1/posts"
    return http.post(url, data, token)
}

export const updatePost = (id, data, token) => {
    const url = `http://crud-api.hypetech.xyz/v1/posts/${id}`
    return http.post(url, data, token, 'PUT')
}

export const deleteSinglePost = (id, data, token) => {
    const url = `http://crud-api.hypetech.xyz/v1/posts/${id}`
    return http.post(url, data, token, 'DELETE')
}
