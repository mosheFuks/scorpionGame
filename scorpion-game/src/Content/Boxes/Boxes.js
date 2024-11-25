import './Boxes.css';
import InputNumber from './InpuntNumber.js/InputNumber';
import LastsNumbers from './LastsNumbers/LastsNumbers';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import TimesPlayed from './TimesPlayed/TimesPlayed';

export default function Boxes( { mainNumber }) {
  const { start, gameOver, setStart, setGameOver, setNumbersAnsweredOk, setTimesPlayed } = useContext(Context);

  if (start == true && gameOver == false) {
    return (
      <div class="conteiner">
        <div class="contenedor">
            <div class="div-amarillo">
                <InputNumber mainNumber={mainNumber}/>
            </div>
            <div class="div-amarillo">
                <LastsNumbers />
            </div>
            <div class="div-amarillo">
                <TimesPlayed />
            </div>
        </div>
      </div>
    )
  }

  if (gameOver == true) {
    return (
      <div>
        <button class="boton-subtittle" onClick={() => {setStart(false); setGameOver(false); setNumbersAnsweredOk(0); setTimesPlayed(0)}}>PLAY AGAIN</button>
      </div>
    )
  }
}
