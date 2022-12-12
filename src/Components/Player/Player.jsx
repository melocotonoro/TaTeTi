import React from 'react'

import "./Player.css"

const Player = ({nextPlayer, choicePlayer}) => {

    let{xChoice,oChoice}= choicePlayer

    return (
        <div className='choiceContainer'>
            <span className= {`choiceX ${!nextPlayer && "inactive" }`}>Player X --{xChoice}</span>
            <span className={`choiceO ${nextPlayer&& "inactive"}`}>Player O --{oChoice}</span>
        </div>
)
}

export default Player
