import React from 'react';
import Button from './Button'
import { Link } from 'react-router-dom'


const Footer = (props) => {

    const isLogged = (!!localStorage.getItem("isLogged"))
    const button = (isLogged ? "Sign Out" : "Sign In");
    const link = (isLogged ? "/" : "/login");

    const logInOut = () => {

        //clear local storage
        localStorage.removeItem('isLogged');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');

        //change log status 
        if (isLogged) {props.changeLogStatus(false)};
    }

    return (
        <div className="row">
            <footer className="footer col">
                <h4>{new Date().getFullYear()}© PlazmaTeam </h4>
                <Link to={link}><Button value={button} className='signInButton' onClick={() => logInOut()} /></Link>
            </footer>
        </div>
    )
}

export default Footer