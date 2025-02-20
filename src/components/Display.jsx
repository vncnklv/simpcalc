import { generateOneLineExpression } from "../utils";
import styles from "./Display.module.css";

export default function Display({ input, values, operations }) {
    const secondaryText = generateOneLineExpression(values, operations);

    return (
        <div className={styles.screen}>
            <span className={styles.secondary}>{secondaryText}</span>
            {input || "0"}
        </div>
    );
}