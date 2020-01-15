import React from 'react'

//Universal and reusable checkbox component that receives checked status, class name and callback function that will receive new checked status 

const Checkbox = (props) => {

//onChange handler that will invoke callback function from props with the new status as a parameter 

    const onChangeHandler = (e) => {
        props.onChange(e.target.checked)
    }
    return (
        <input type="checkbox" checked={props.checked} className={props.nameClass} onChange={onChangeHandler} ></input>
    )
}

export default Checkbox