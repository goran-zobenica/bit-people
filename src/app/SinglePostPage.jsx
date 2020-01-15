import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
import { fetchSinglePost, updatePost, deleteSinglePost } from "../services/postServices"
import Loader from './components/Loader'
import Message from './components/Message'
import { popUp } from '../shared/popUpMessage'


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                sid: "",
                title: "",
                subtitle: "",
                imageUrl: "",
                text: ""
            },
            loading: true,
            messageAction: ""
        }
    }

    componentDidMount() {
        let token = localStorage.getItem("currentUser")
        fetchSinglePost(this.props.match.params.id, token)
            .then(result => this.setState(
                {
                    data: {
                        title: result.title,
                        subtitle: result.subtitle,
                        imageUrl: result.imageUrl,
                        text: result.text,
                        sid: result.sid
                    },
                    loading: false
                }))
    }

    getTitle = (title) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                title
            }
        }))
    }

    getSubtitle = (subtitle) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                subtitle
            }
        }))
    }

    getImageUrl = (ImageUrl) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                ImageUrl
            }
        }))
    }

    getText = (text) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                text
            }
        }))
    }

    updatePost = () => {
        let token = localStorage.getItem("currentUser")
        this.setState({ messageAction: "updated!" })
        updatePost(this.props.match.params.id, this.state.data, token)
            .then(result => {
                popUp()
                setTimeout(() => {
                    this.props.history.push('/myposts')
                }, 2000);
            })

    }
    deletePost = () => {
        let token = localStorage.getItem("currentUser")
        this.setState({ messageAction: "deleted!" })
        deleteSinglePost(this.props.match.params.id, this.state.data, token)
            .then(result => {
                popUp()
                setTimeout(() => {
                    this.props.history.push('/myposts')
                }, 2000);
            })
    }

    render() {

        if (this.state.loading) {
            return <Loader />
        }

        return (
            <div className="singlePostPage row">
                <div className="col">
                    <h2>Update post</h2>
                    <p><span className="headStyle">Title:</span><br />
                        <Input type="text" placeholder="Enter title here" value={this.state.data.title} className="inputTitleName" onChange={this.getTitle} required />
                    </p>
                    <p><span className="headStyle">Subtitle:</span><br />
                        <Input type="text" placeholder="Enter subtitle here" value={this.state.data.subtitle} className="inputSubtitleName" onChange={this.getSubtitle} required />
                    </p>
                    <Input type="text" placeholder="Image URL" value={this.state.data.imageUrl} className="enterImageURL" onChange={this.getImageUrl} required />
                    <p><span className="headStyle">Text of post:</span><br />
                        <Input type="text" placeholder="Enter text here" value={this.state.data.text} className="inputTextOfPost" onChange={this.getText} required />
                    </p>
                    <Button value="DELETE" className="deletePost" onClick={this.deletePost} />
                    <Button value="SAVE" className="savePost" onClick={this.updatePost} />
                    <Message text={`Post successfully ${this.state.messageAction}!`} className="messageHide" />
                </div>
            </div>
        )
    }

}

export default SinglePostPage