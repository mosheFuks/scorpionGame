import './SheetNumber.css';
import { useContext, useEffect} from 'react';
import { Context } from '../../Context/Context';

function SheetNumber() {

  const { mainNumber, gameOver } = useContext(Context); 
  
  
  
  return (
    <>
    <div class="hojas">
      <div class="hoja ">
        <span class="numero">{gameOver ? mainNumber[0] : null}</span>
      </div>
      <div class="hoja hoja2">
        <span class="numero">{gameOver ? mainNumber[1] : null}</span>
      </div>
      <div class="hoja hoja3">
        <span class="numero">{gameOver ? mainNumber[2] : null}</span>
      </div>
      <div class="hoja hoja4">
        <span class="numero">{gameOver ? mainNumber[3] : null}</span>
      </div>
    </div>

    <div>
      {gameOver ? 
        <>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        </>
      :
      null
      }
    </div>
    </>
  );
}

export default SheetNumber;
