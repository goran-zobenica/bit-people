import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import SignInPage from '../SignInPage'
import SignUpPage from '../SignUpPage'
import SinglePostPage from '../SinglePostPage'
import PostsPage from '../PostsPage'
import CreatePostPage from '../CreatePostPage'
import About from '../About'
import Dashboard from '../DashBoard';
import MyPosts from '../MyPosts';

const PrivateRoute = ({ children }) => {
    return <Route render={() => localStorage.getItem('isLogged') ? (children) : (<Redirect to="/login" />)} />
}

const Main = (props) => {
    return (
        <div className="main row">
            <div className="col">
                <Switch>
                    <Route exact path="/posts" component={PostsPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/login" render={() => <SignInPage changeLogStatus={props.changeLogStatus} changeUserName={props.changeUserName} />} />
                    <Route exact path="/newUser" component={SignUpPage} />
                    <Redirect exact path="/" to="/posts" />
                    <PrivateRoute>
                        <Route exact path="/post/:id" component={SinglePostPage} />
                        <Route exact path="/new_post" component={CreatePostPage} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/myposts" component={MyPosts} />
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    )
}


export default Main