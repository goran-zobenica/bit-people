import React, { useState } from "react"
import Input from './components/Input'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
import userLogo from '../images/userLogo.png'
import { createUser } from '../services/userServices'
import validateInputs from '../shared/passwordValidation'

const SignUpPage = (props) => {
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getFirstName = (value) => {
        document.querySelector('.firstName').classList.remove('invalidInput')
        document.querySelector('.firstName').setAttribute('placeholder', 'First Name *')
        setFirstName(value)
    }

    const getEmail = (value) => {
        document.querySelector('.email').classList.remove('invalidInput')
        document.querySelector('.email').setAttribute('placeholder', 'Email Address *')
        setEmail(value)
    }

    const getPassword = (value) => {
        document.querySelector('.password').classList.remove('invalidInput')
        document.querySelector('.password').setAttribute('placeholder', 'Password *')
        setPassword(value)
    }

    const getRegistrationData = () => {
        let data = {
            email: email,
            password: password,
            name: firstName,
        };

        const isValid = validateInputs(data.email, data.password, data.name)

        if (isValid) {
            createUser(data)
                .then(token => {
                    if (token.statusCode === 422) {
                        document.querySelector('.email').classList.add('invalidInput')
                        document.querySelector('.email').setAttribute('title', 'Incorrect email address or email address is already registered!')
                    } else {
                        props.history.push('/login/')
                    }
                })
        }
    }

    return (
        <div className="signUpPage row">
            <div className="col signUpContainer">
                <img src={userLogo} className="userLogo" alt=""></img>
                <h2 className="h2SignUp">Sign up</h2>
                <Input type="text" placeholder="First Name *" className="firstName" onChange={getFirstName} />
                <Input type="text" placeholder="Last Name *" className="lastName" onChange={() => { }} />
                <br />
                <Input type="email" placeholder="Email Address *" className="email" onChange={getEmail} required />
                <Input type="password" placeholder="Password *" className="password" onChange={getPassword} required />
                <p><Checkbox className="checkBox" onChange={() => { }} /> I want to receive inspiration, marketing promotions and updates via email.</p>
                <Button value="SIGN UP" className="signUp" onClick={getRegistrationData} />
                <p>Already have an account? Sign in</p>
            </div>
        </div>
    )
}

export default SignUpPage