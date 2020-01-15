import React, {useState} from 'react'
import { searchUser } from '../../services/userServices'
import { useEffect } from 'react';

// Displays author name ( it is false by default displaying loader until it gets the name from userService ) 

const AuthorName = props => {
    const [authorName, setAuthorName] = useState(false);


// On every props update it checks for the author name

    useEffect(
        () => {
            searchUser(props.id).then(authorName => setAuthorName(authorName))
        },[props.id])


// Displays loader animation while fetching author name

    if (!authorName) { return <div className="circleLoader"></div> }

    
//Renders author name to display

    return (
        <span>{` ${authorName} `}</span>
    )
}

export default AuthorName