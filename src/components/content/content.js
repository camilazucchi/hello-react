import styles from "./content.module.css";

export default function Content({ title, children, img }) {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.contentContainer}>{children}</div>
    </article>
  );
}