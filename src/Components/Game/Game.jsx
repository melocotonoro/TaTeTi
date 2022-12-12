import React, { useState } from 'react'
import Board from '../Board/Board'
import Player from '../Player/Player'
import Reset from '../Reset/Reset'
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
        const[choicePlayer, setChoicePlayer]= useState({xChoice:0, oChoice:0})
        const[gameOver,setGameOver]=useState(false)

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

                    const winPlayer=gameWin(completeCell)

                        if (winPlayer){
                            if (winPlayer ==="x" ||winPlayer ==="X"){
                                let {xChoice}=choicePlayer
                                xChoice += 1
                                setChoicePlayer({...choicePlayer, xChoice})
                            }
                            else {
                                let {oChoice}=choicePlayer
                                oChoice += 1
                                setChoicePlayer({...choicePlayer, oChoice})
                            }
                        }
            }

                    const cleanBoard=()=>{
                        setGameOver(false)
                        setCell(Array(9).fill(""))
                    }

                        const cleanPoints=()=>{
                            setChoicePlayer({...choicePlayer, xChoice:0, oChoice:0})
                        }
                    
                        const gameWin=(cell)=>{
                            for (let i = 0; i < WinPlay.length; i++) {
                                
                                let[a,b,c]= WinPlay[i];
                                    if (cell[a] && cell[a]===cell[b] && cell[b]===cell[c]){
                                        setGameOver(true)
                                            return cell[a]
                                }
                            }
                        }

                return (
                        <div className='gameContent'>
                            <h1>Ta Te Ti</h1>
                            <Player nextPlayer={nextPlayer} choicePlayer={choicePlayer}/>
                            <div className='boardContent'>
                                <Board cell={cell} handleChange={gameOver ===true ? cleanBoard : handleChange}/>
                            </div>
                            <div>
                                <Reset clean={cleanBoard} states={"Reset"}/>
                                <Reset clean={cleanPoints} states={"Reset Points"}/>
                            </div>
                        </div>
)
}
