import React from 'react'

const Input = (props) => {
    const onChangeHandler = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <input type={props.type} value={props.value} placeholder={props.placeholder} className={props.className} onChange={onChangeHandler} required></input>
    )
}

export default Input