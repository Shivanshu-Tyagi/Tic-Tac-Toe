import { useState } from "react";
import Square from "./Square";

function Game() {
    const [state, setState] = useState(Array(9).fill(null));
    const [turnX, setTurnX] = useState(true)

    const handleClick = (index) => {

        if (state[index] !== null) {
            return;
        }

        const copyState = [...state];
        copyState[index] = turnX ? "X" : "O";
        setState(copyState);
        setTurnX(!turnX);
    }

    const checkWinner = () => {
      const winnerLogic = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [1,4,8],
        [2,4,6]
      ]

      for (const logic of winnerLogic) {
        const [a,b,c] = logic;
        if (state[a] !== null && state[b] == state[c] && state[c] == state[a]) {
            return state[b];
        }
      }
      return false;
    }

    const iswinner = checkWinner();

    const handlePlayAgain = () => {
      setState(Array(9).fill(null));
    }
  return (
   <>{iswinner ? ( <><h3>{iswinner} winner !!</h3> <button onClick={()=>handlePlayAgain()}>Play Again</button></>) :  <div className="board">
   <div className="board-row">
     <Square  onClick = {() => handleClick(0)} value = {state[0]}/>
     <Square onClick = {() => handleClick(1)} value = {state[1]}/>
     <Square onClick = {() => handleClick(2)} value = {state[2]}/>
   </div>
   <div className="board-row">
     <Square onClick = {() => handleClick(3)} value = {state[3]}/>
     <Square onClick = {() => handleClick(4)} value = {state[4]}/>
     <Square onClick = {() => handleClick(5)} value = {state[5]}/>
   </div>
   <div className="board-row">
     <Square onClick = {() => handleClick(6)} value = {state[6]}/>
     <Square onClick = {() => handleClick(7)} value = {state[7]}/>
     <Square onClick = {() => handleClick(8)} value = {state[8]}/>
   </div>
 </div>}</>
  );
}

export default Game;
