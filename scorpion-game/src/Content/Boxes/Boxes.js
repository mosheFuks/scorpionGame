import './Boxes.css';
import InputNumber from './InpuntNumber.js/InputNumber';
import LastsNumbers from './LastsNumbers/LastsNumbers';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

export default function Boxes( { mainNumber }) {
  const { start, gameOver, setStart, setGameOver, setNumbersAnsweredOk } = useContext(Context);

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
        </div>
      </div>
    )
  }

  if (gameOver == true) {
    return (
      <div>
        <button class="boton-subtittle" onClick={() => {setStart(false); setGameOver(false); setNumbersAnsweredOk(-1)}}>PLAY AGAIN</button>
      </div>
    )
  }
}
