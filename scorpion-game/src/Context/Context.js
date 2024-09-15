import { createContext, useEffect, useState } from "react";
export const Context = createContext(null);

const AppProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [newInsertedNumber, setNewInsertedNumber] = useState("");
    const [fullAnswerOk, setFullAnswerOk] = useState(false);
    const [errorAnswer, setErrorAnswer] = useState(false);
    const [gameOver, setGameOver] = useState(false); 
    const [finalSubtittle, setFinalSubttitle] = useState("");
    const [numbersAnsweredOk, setNumbersAnsweredOk] = useState(-1);

    const randomNumber = Math.floor(1000 + Math.random() * 9000).toString();
    const [mainNumber, setMainNumber] = useState(randomNumber);
    console.log("Main number is: ", mainNumber);
    useEffect(() => {
        if (start) {
            setMainNumber(Math.floor(1000 + Math.random() * 9000).toString())
        }
    }, [start])

    return (
        <Context.Provider
            value={{
                setStart,
                start,
                newInsertedNumber,
                setNewInsertedNumber,
                fullAnswerOk,
                setFullAnswerOk,
                errorAnswer, 
                setErrorAnswer,
                finalSubtittle,
                setFinalSubttitle,
                mainNumber, 
                setMainNumber,
                numbersAnsweredOk, 
                setNumbersAnsweredOk,
                gameOver, 
                setGameOver
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default AppProvider;