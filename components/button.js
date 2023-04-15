import styles from "./button.module.css";

export default function Button({ children, url }) {
  return (
    <a href={url} className={styles.button} target="_blank">
      {children}
    </a>
  );
}
