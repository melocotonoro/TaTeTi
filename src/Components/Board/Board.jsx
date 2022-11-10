import React from 'react'
import "./Board.css"

const Board = ({cell,handleChange}) => {

    return (
            <>
                {
                    cell.map((value,indx)=><div onClick={()=>value==="" && handleChange(indx)} className='boardCell'>{value}</div>)
                }
            </>
)
}

export default Board

