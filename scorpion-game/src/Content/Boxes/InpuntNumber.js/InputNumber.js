import './InputNumber.css';
import { useContext, useState } from 'react';
import { Context } from '../../../Context/Context';

function InputNumber() {
  const { mainNumber, setNumbersAnsweredOk, setNewInsertedNumber,  newInsertedNumber} = useContext(Context);
  
  const [inputValue, setInputValue] = useState("");
  const [validInput, setValidInput] = useState(true);
  const [checkingAnswer, setCheckingAnswer] = useState(false);
  let firstNumberOk = false
  let secondNumberOk = false 
  let thirdNumberOk = false
  let fourthNumberOk = false


  const checkPositionsOk = () => {
    if (mainNumber[0] === inputValue[0]) {
      firstNumberOk = true
    } if (mainNumber[1] === inputValue[1]) {
      secondNumberOk = true
    } if (mainNumber[2] === inputValue[2]) {
      thirdNumberOk = true
    } if (mainNumber[3] === inputValue[3]) {
      fourthNumberOk = true
    } 
  }

  const analyzeAnswer = () => {
    let numbersAnsweredOk = 0;
    checkPositionsOk()
    if (firstNumberOk) {
      numbersAnsweredOk += 1
    } if (secondNumberOk) {
      numbersAnsweredOk += 1
    } if (thirdNumberOk) {
      numbersAnsweredOk += 1
    } if (fourthNumberOk) {
      numbersAnsweredOk += 1
    } 
    setNumbersAnsweredOk(numbersAnsweredOk)
    setNewInsertedNumber(inputValue)
    setCheckingAnswer(false)
  }

  const checkAnswer = () => {
    if (inputValue.length < 4 || inputValue == newInsertedNumber) {
      setValidInput(false)
      setTimeout(() =>{
        setValidInput(true)
      }, 5000);
    } else {
      setCheckingAnswer(true)
      setTimeout(() => {
        analyzeAnswer()
      }, 3000);
    }
  } 

  return (
    <div class="container">
    {validInput?
    <h6 class="titulo">Submit your number</h6>
    :
    <div class="input-container">
      <p class="titulo" style={{color: "red"}}>{inputValue == newInsertedNumber ? "Please enter other number": "You must enter at least a four-digit number"}</p>
    </div>
    }
    <div class="input-container">
        <input type="text" class="numero-input" placeholder="Type a number" onChange={(event) => setInputValue(event.target.value)}/>
    </div>
    {validInput && !checkingAnswer?
      <button class="boton" onClick={() => checkAnswer()}>SUBMIT</button>
    : 
    null
    }
    {validInput && checkingAnswer? 
    <div>
      <h4 style={{color: "#ADD8E6"}}>LOADING</h4>
      <div class="loading-container">
        <div class="loading-bar"></div>
      </div>
    </div>
    :
    null
    }
    </div>
  );
}

export default InputNumber;
