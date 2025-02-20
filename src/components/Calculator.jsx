import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import { calculateResult } from "../utils";

export default function Calculator() {
    const [input, setInput] = useState("");
    const [values, setValues] = useState([]);
    const [operations, setOperations] = useState([]);
    const [latestUserInput, setLatestUserInput] = useState("");

    const updateInput = (userInput) => {
        if (latestUserInput == "=") {
            if(isNaN(userInput) && userInput != "=" && userInput != ".")
            {
                setValues([input]);
                setOperations([]);
                setInput("");
            }
            else
            {
                resetCalculator();
            }
        }

        if (userInput == ".") {
            if (input && !isNaN(input)) {
                setInput((prev) => `${prev}${userInput}`);
            }
        }
        else if (userInput == "=") {
            values.push(input); // bad line but the setter is async, i can't wait for it ...
            if (values.length == operations.length) {
                setOperations((prev) => prev.slice(0, -1));
            }
            
            var result = calculateResult(values, operations);
            setInput(result);
        }
        else if (isNaN(userInput)) {
            if (input) {
                if(latestUserInput != "=") {
                    setValues(prev => [...prev, input]);
                }
                setOperations(prev => [...prev, userInput]);
                setInput(() => "");
            }
        }
        else {
            setInput((prev) => prev == "" ? userInput.toString() : `${prev}${userInput}`);
        }

        setLatestUserInput(userInput.toString());
    }

    const resetCalculator = () => {
        setInput("");
        setValues([]);
        setOperations([]);
        setLatestUserInput("");
    }

    // To do
    const undoLastStep = () => {

    }

    return (
        <div className='calculator'>
            <Display input={input} values={values} operations={operations} />
            <Buttons
                updateInput={updateInput}
                resetCalculator={resetCalculator}
                undoLastStep={undoLastStep}
            />
        </div>
    );
}