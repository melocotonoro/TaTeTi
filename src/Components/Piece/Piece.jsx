import React from 'react'
import "./Piece.css"

export const Piece = ({index,nextPlayer,handlePiece}) => {

        
                return (
                        <button onClick={handlePiece(index)} className='pieceContent'>{nextPlayer}</button>
        )
}
