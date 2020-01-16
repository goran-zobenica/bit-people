import React, { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
import { createPost } from '../services/postServices'
import validatePost from '../shared/postValidation'
import { removeClassAttribute } from '../shared/reset'
import Message from './components/Message'
import { popUp } from '../shared/popUpMessage'

const CreatePostPage = (props) => {
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [content, setContent] = useState("");

    const getCheckValue = (value) => {
        setStatus(value)
    }
    const getTitle = (value) => {
        setTitle(value)
        removeClassAttribute(".inputTitle")
    }
    const getSubtitle = (value) => {
        setSubtitle(value)
        removeClassAttribute(".inputSubtitle")
    }
    const getPhoto = (value) => {
        setPhoto(value)
        removeClassAttribute(".inputImgUrl")
    }
    const getContent = (value) => {
        setContent(value)
        removeClassAttribute(".inputPostText")
    }

    const makePost = () => {
        let data = {
            isPublic: status,
            title: title,
            subtitle: subtitle,
            imageUrl: photo,
            text: content
        }
        const validation = validatePost(data.title, data.subtitle, data.text, data.imageUrl)
        let token = localStorage.getItem("currentUser")

        if (validation === true) {

            createPost(data, token)
                .then(() => {
                    popUp()
                    setTimeout(() => props.history.push("/myposts"), 2000)
                })
        }
    }

    return (
        <div className="CreatePostPage row">
            <div className="col">
                <h2>Create Post</h2>
                <div className="row createPostContainer">
                    <div className="col-md-6">
                        <label className="width">Title: <br />
                            <Input className="inputTitle reset" type="text" placeholder="Post Title" onChange={getTitle} />
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label className="width">Subtitle: <br />
                            <Input className="inputSubtitle reset" type="text" placeholder="Post subtitle" onChange={getSubtitle} />
                        </label>
                    </div>
                    <div className="col-md-6">
                        <Input className="inputImgUrl reset" type="text" placeholder="Image URL" onChange={getPhoto} />
                    </div>
                    <div className="col-md-6">
                        <span>Private</span>
                        <label className="switch">
                            <Checkbox type="checkbox" nameClass="checkReset" onChange={getCheckValue} />
                            <span className="slider round"></span>
                        </label>
                        <span>Public</span>
                    </div>
                    <div className="col-md-6">
                        <label className="postText width">Text of post: <br />
                            <Input className="inputPostText reset" type="text" onChange={getContent} />
                        </label>
                    </div>
                    <div className="col-md-6">
                    <Button value='SAVE' className='saveButton' onClick={makePost} />
                    <Message text="Post successfully created" className="messageHide" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostPage