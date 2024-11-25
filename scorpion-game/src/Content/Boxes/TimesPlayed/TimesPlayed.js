import { useContext, useState } from 'react';
import { Context } from '../../../Context/Context';
import { CircleAlert, CircleCheck, CircleHelp } from 'lucide-react';
import './TimesPlayed.css';

function TimesPlayed() {
  const { timesPlayed } = useContext(Context)

  return (
      <div class="container">
        <h6 class="titulo">INTENTOS:</h6>
            <ul class="lista-elecciones">
                <li class="eleccion animacion">{timesPlayed > 0 && timesPlayed}</li>
            </ul>
        </div>
  );
}

export default TimesPlayed;
