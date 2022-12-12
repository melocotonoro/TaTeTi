import React from 'react'
import "./Reset.css"

const Reset = ({clean, states}) => {

    return (
        <button className='btnReset' onClick={clean}>{states}</button>
)
}

export default Reset