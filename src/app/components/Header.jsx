import React from 'react';
import Button from './Button'
import { Link } from "react-router-dom";

const Header = (props) => {

    const isLogged = !!localStorage.getItem("isLogged");

    let button1 = isLogged ? "Dashboard" : "Posts"
    let button2 = isLogged ? "My Posts" : "About"
    let link1 = isLogged ? "/dashboard" : "/posts"
    let link2 = isLogged ? "/myposts" : "/about"
    let user = isLogged ? `Logged as: ${props.userName}` : ""

    return (
        <header className="header row">
            <div className="userName">
                <p>{user} </p>
            </div>
            <div className="col-sm-12 col-md-6">

                <p className='logoBitCrud'> BIT CRUD </p>
            </div>
            <div className='navBarHeader col-sm-12 col-md-6'>
                <Link to={link2}><Button value={button2} className='aboutHeader' onClick={() => { }} /></Link>
                <Link to={link1}><Button value={button1} className='postsHeader' onClick={() => { }} /></Link>
            </div>
        </header>
    )
}

export default Header