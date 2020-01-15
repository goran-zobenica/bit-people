import React from 'react'

const SearchBar = (props) => {
    const onChangeHandler = (e) => {
        props.onChange(e.target.value.toLowerCase())
    }

    return (
        <input type="text" placeholder="Search" className={props.className} onChange={onChangeHandler} ></input>
    )
}

export default SearchBar