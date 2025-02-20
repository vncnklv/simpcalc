import styles from "./Button.module.css";

export default function Button({ innerText, onClick }) {
    const className = innerText == "=" ? `${styles.button} ${styles.equals}` : styles.button;

    return (
        <button onClick={onClick} className={className}>
            {innerText}
        </button>
    );
}