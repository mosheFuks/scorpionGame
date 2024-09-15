import { useContext, useEffect } from 'react';
import { Context } from '../../Context/Context';
import './Tittle.css';

function Tittle() {
  const { start,  numbersAnsweredOk, setStart,  fullAnswerOk, finalSubtittle, setFinalSubttitle, setGameOver } = useContext(Context);
  console.log("START start value: ", start)

  let subtitle = ""
  const canYouGuess = "CAN YOU GUESS THE HIDDEN NUMBER?"
  const noCorrectNumber = "YOU DO NOT GUESS ANY NUMBER"
  const oneNumber = "YOU HAVE GUESS ONE CORRECT NUMBER"
  const twoNumber = "YOU HAVE GUESS TWO CORRECT NUMBERS"
  const threeNumber = "YOU HAVE GUESS THREE CORRECT NUMBERS"
  const full = "PERFECT, YOU HAVE GUESS THE RIGHT NUMBER!!"

  useEffect(() => {
    console.log("GET IN HERE")
    if(numbersAnsweredOk == 1){
      subtitle = oneNumber
    } else if (numbersAnsweredOk == 2) {
      subtitle = twoNumber
    } else if (numbersAnsweredOk == 3) {
      subtitle = threeNumber
    } else if (numbersAnsweredOk == 4) {
      subtitle = full
      setGameOver(true)
    } else if (!start) {
      subtitle = canYouGuess
    } else if (numbersAnsweredOk == 0) {
      subtitle = noCorrectNumber
    }
    setFinalSubttitle(subtitle)

  }, [numbersAnsweredOk])

  return (
    <div>
      <div>
        <h1 class="tittle-text">SCORPION</h1>
      </div>
      <div class="contenedor-subtittle">
        <div class="sub-contenedor">
          <h5 class="sub-tittle-text">{finalSubtittle}</h5>
        </div>
        <div class="sub-contenedor">
          {!start ? <button class="boton-subtittle" onClick={() => setStart(true)}>CONTINUE</button> : null}        
        </div>
      </div>
    </div>
  );
}

export default Tittle;