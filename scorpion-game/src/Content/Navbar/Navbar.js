import { useContext, useState } from 'react';
import { Context } from '../../Context/Context';
import { CircleAlert, CircleCheck, CircleHelp } from 'lucide-react';
import Modal from 'react-modal';
import './Navbar.css';

Modal.setAppElement('#root'); // Asegura accesibilidad al indicar el elemento raíz de la app.

function Navbar() {
  const { } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showPlayInstructions = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <CircleHelp
        size={48}
        color='orange'
        className='helper-icon'
        onClick={showPlayInstructions}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={showPlayInstructions}
        className="modal"
        overlayClassName="modal-overlay"
        closeTimeoutMS={300} // Duración de la transición
      >
        <h2 className="modal-title">Puedes adivinar el numero de cuatro digitos?</h2>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
            <CircleCheck color='green'/>
            <p className="modal-text">
                Paso 1: Ingresa el un numero de cuatro digitos
            </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
            <CircleCheck color='green'/>
            <p className="modal-text">
                Paso 2: El programa te diria si adivinaste algun numero del numero oculto!
            </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
            <p className="modal-text">
                Ejemplo: 
            </p>
        </div>
        
        <p className="modal-text">
          Numero escondido '5478'     
        </p>
        <p className="modal-text">
          Numero ingresado '9658'    
        </p>
        <p className="modal-text">
          Resulatdo: Adivinaste un numero (en este caso el 8, el de la ultima posición)    
        </p>
      
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
            <CircleAlert color='red' size={48}/>
            <p className="modal-text">
                Aclaracion: El programa no te dira en que posicion esta el numero que adivinaste ni cual es el correcto
            </p>
        </div>
        
        <div style={{ alignItems: "center", justifyContent: "center", margin: "auto"}}>
            <button className="modal-close-button" onClick={showPlayInstructions}>
              Cerrar
            </button>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
