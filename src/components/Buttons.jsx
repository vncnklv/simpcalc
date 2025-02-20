import Button from "./Button";
import styles from "./Buttons.module.css";

export default function Buttons({ updateInput, resetCalculator, undoLastStep }) {

    const onClick = (value) => {
        updateInput(value);
    };

    return (
        <div className={styles.buttons}>
            <Button innerText={"AC"} onClick={undoLastStep} />
            <Button innerText={"CC"} onClick={resetCalculator} />
            <Button innerText={"/"} onClick={() => onClick("/")} />
            <Button innerText={"*"} onClick={() => onClick("*")}/>

            <Button innerText={"7"} onClick={() => onClick(7)}/>
            <Button innerText={"8"} onClick={() => onClick(8)}/>
            <Button innerText={"9"} onClick={() => onClick(9)}/>
            <Button innerText={"-"} onClick={() => onClick("-")}/>

            <Button innerText={"4"} onClick={() => onClick(4)}/>
            <Button innerText={"5"} onClick={() => onClick(5)}/>
            <Button innerText={"6"} onClick={() => onClick(6)}/>
            <Button innerText={"+"} onClick={() => onClick("+")}/>

            <Button innerText={"1"} onClick={() => onClick(1)} />
            <Button innerText={"2"} onClick={() => onClick(2)}/>
            <Button innerText={"3"} onClick={() => onClick(3)}/>
            <Button innerText={"%"} onClick={() => onClick("%")}/>

            <Button innerText={"0"} onClick={() => onClick(0)}/>
            <Button innerText={"."} onClick={() => onClick(".")}/>
            <Button innerText={"="} onClick={() => onClick("=")}/>
        </div>
    );
}