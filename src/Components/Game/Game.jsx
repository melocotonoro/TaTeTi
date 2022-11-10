import React, { useState } from 'react'
import Board from '../Board/Board'
import "./Game.css"

export const Game = () => {

    const WinPlay=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

        const[cell,setCell]=useState(Array(9).fill(""))
        const[nextPlayer,setNextPlayer]=useState(true)


            const handleChange=(boxIdx)=>{
                const completeCell=cell.map((value,indx)=>{
                        if(boxIdx===indx){
                            return nextPlayer===true ? "X":"O"
                        }
                        else{
                            return value 
                        }
                })
                setCell(completeCell)   
                setNextPlayer(!nextPlayer)
            }

                const cleanBoard=()=>setCell(Array(9).fill(""))
                
                

                return (
                        <div className='gameContent'>
                            <h1>Ta Te Ti</h1>
                            <div className='boardContent'>
                                <Board cell={cell} handleChange={handleChange}/>
                            </div>
                            <button onClick={cleanBoard}>Borrar</button>
                        </div>
)
}
