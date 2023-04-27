import styles from "./button.module.css";

export default function Button({ children, size }) {
  return (
    <button className={`${styles.button} ${styles[size]}`}>{children}</button>
  );
}