import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import { fetchSinglePost, updatePost, deleteSinglePost } from "../services/postServices"
import Loader from './components/Loader'
import Message from './components/Message'
import { popUp } from '../shared/popUpMessage'

const SinglePostPage = (props) => {

    const [sid, setSid] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);
    const [messageAction, setMessageAction] = useState("");

    useEffect(() => {
        let token = localStorage.getItem("currentUser")
        fetchSinglePost(props.match.params.id, token)
            .then(result => {
                setSid(result.sid)
                setTitle(result.title)
                setSubtitle(result.subtitle)
                setImageUrl(result.imageUrl)
                setText(result.text)
                setLoading(false)
            })
    }, [])

    const getTitle = (title) => { setTitle(title) }
    const getSubtitle = (subtitle) => { setSubtitle(subtitle) }
    const getImageUrl = (imageUrl) => { setImageUrl(imageUrl) }
    const getText = (text) => { setText(text) }

    const changePostData = () => {
        let token = localStorage.getItem("currentUser")
        updatePost(props.match.params.id, { sid, title, subtitle, imageUrl, text }, token)
            .then(result => {

                if (!result.error) {
                    setMessageAction("Post successfully updated!")
                } else {
                    setMessageAction(result.error)
                }

                popUp()
                setTimeout(() => {
                    props.history.push('/myposts')
                }, 2000);
            })
    }

    const deletePost = () => {
        let token = localStorage.getItem("currentUser")
        deleteSinglePost(props.match.params.id, {}, token)
            .then(result => {

                if (!result.error) {
                    setMessageAction("Post successfully deleted!")
                } else {
                    setMessageAction(result.error)
                }

                popUp()
                setTimeout(() => {
                    props.history.push('/myposts')
                }, 2000);
            })
    }
    if (loading) {
        return <Loader />
    }

    return (
        <div className="singlePostPage row">
            <div className="col">
                <h2>Update post</h2>
                <p><span className="headStyle">Title:</span><br />
                    <Input type="text" placeholder="Enter title here" value={title} className="inputTitleName" onChange={getTitle} required />
                </p>
                <p><span className="headStyle">Subtitle:</span><br />
                    <Input type="text" placeholder="Enter subtitle here" value={subtitle} className="inputSubtitleName" onChange={getSubtitle} required />
                </p>
                <Input type="text" placeholder="Image URL" value={imageUrl} className="enterImageURL" onChange={getImageUrl} required />
                <p><span className="headStyle">Text of post:</span><br />
                    <Input type="text" placeholder="Enter text here" value={text} className="inputTextOfPost" onChange={getText} required />
                </p>
                <Button value="DELETE" className="deletePost" onClick={deletePost} />
                <Button value="SAVE" className="savePost" onClick={changePostData} />
                <Message text={messageAction} className="messageHide" />
            </div>
        </div>
    )
}

export default SinglePostPage