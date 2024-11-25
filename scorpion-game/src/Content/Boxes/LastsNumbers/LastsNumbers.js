import './LastsNumbers.css';
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Context"

function LastsNumbers() {
  const {  newInsertedNumber, gameOver } = useContext(Context);
  const [trackedAnswers, setTrackedAnswers] = useState([]);

  useEffect(() => {
    if (newInsertedNumber.length == 4) {
      setTrackedAnswers([newInsertedNumber, ...trackedAnswers])
    }
    console.log("Tracked Answer number is: ", trackedAnswers[0], trackedAnswers[1], trackedAnswers[2]);
    updateAnswersList()
  },[newInsertedNumber])

  useEffect(() => {
    if (gameOver == true) {
      console.log("Game over is: ", trackedAnswers );
    }
  },[gameOver])

  const updateAnswersList = () => {
    trackedAnswers.shift()
  }
  
  return (
    <div class="container">
        <h6 class="titulo">TUS ULTIMAS 3 OPCIONES FUERON:</h6>
        <ul class="lista-elecciones">
            <li class="eleccion animacion">{trackedAnswers[0] }</li>
            <li class="eleccion animacion">{trackedAnswers[1] }</li>
            <li class="eleccion animacion">{trackedAnswers[2] }</li>
        </ul>
    </div>

  );
}

export default LastsNumbers;