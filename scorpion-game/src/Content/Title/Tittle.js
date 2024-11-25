import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/Context';
import './Tittle.css';

function Tittle() {
  const { start, numbersAnsweredOk, setStart, fullAnswerOk, finalSubtittle, setFinalSubttitle, setGameOver } = useContext(Context);
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  console.log("START start value: ", start)

  let subtitle = ""
  const canYouGuess = "PODRAS ADIVINAR EL NUMERI SECRETO?"
  const noCorrectNumber = "NO ADIVINASTE NINGUN NUMERO"
  const oneNumber = "ADIVINASTE UN NUMERO!"
  const twoNumber = "ADIVINASTE DOS NUMEROS!"
  const threeNumber = "ADIVINASTE TRES NUMEROS!"
  const full = "FELICIDADES, ADIVINASTE TODOS LOS NUMEROS!!"

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

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedSubtitle(finalSubtittle.slice(0, index));
      index++;
      if (index > finalSubtittle.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [finalSubtittle]);

  return (
    <div>
      <div>
        <h1 class="tittle-text">SCORPION</h1>
      </div>
      <div class="contenedor-subtittle">
        <div class="sub-contenedor">
          <h5 class="sub-tittle-text">{displayedSubtitle}</h5>
        </div>
        <div class="sub-contenedor">
          {!start ? <button class="boton-subtittle" onClick={() => setStart(true)}>CONTINUAR</button> : null}        
        </div>
      </div>
    </div>
  );
}

export default Tittle;

