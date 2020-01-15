import React, { useState } from 'react'
import LockLogo from '../images/lock.jpg'
import Input from './components/Input'
import Checkbox from './components/Checkbox'
import Button from './components/Button'
import { loginUser, fetchUsers } from "../services/userServices"
import { Link, withRouter } from 'react-router-dom'


const SignInPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const updateEmail = (value) => {
        setEmail(value)
    };

    const updatePassword = (value) => {
        setPassword(value)
    };

    const updateRemember = (value) => {
    };

    const signIn = () => {
        let data = {
            email: email,
            password: password
        }

        loginUser(data)
            .then(result => {
                if (result.error) {
                    setError(result.error)
                } else {
                    localStorage.setItem("currentUser", result.accessToken)
                    localStorage.setItem("isLogged", true)
                    fetchUsers()
                        .then(usersList => usersList.filter(user => user.email === email))
                        .then(result => {
                            localStorage.setItem("userId", result[0].id)
                            localStorage.setItem("userName", `${result[0].name.first}`)
                            props.history.push('/dashboard/')
                        })
                }
            })
    }

    return (
        <div className="signInPage row">
            <div className="col">
                <img src={LockLogo} alt='logo'></img>
                <h2>Sign in</h2>
                <form>
                    <fieldset>
                        <legend>Email Address *</legend>
                        <Input className="inputEmail" type="text" onChange={updateEmail} />
                    </fieldset>
                    <Input className="passwordSignIn" type="password" placeholder="Password *" onChange={updatePassword} required />
                    <p className="error">{error}</p>
                    <p><Checkbox onChange={updateRemember} /> Remember me</p>
                    <Button value='SIGN IN' className='signInButton' onClick={signIn} />
                    <div className="signInContainer">
                        <span className="forgotPassword">Forgot password</span>
                        <Link to="/newUser" > <span className="haveNotAccount">Don't have an account? Sign Up</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default withRouter (SignInPage)