import React from 'react'

//Universal and reusable button component that receives caption, class name and callback function that will be trigered on onClick Event

const Button = (props) => {

//onClick handler that will just invoke callback function passed throug props    

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <input type="button" value={props.value} className={props.className} onClick={onClickHandler}></input>
    )
}

export default Button