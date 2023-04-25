import Image from "next/image";
import about from "../../../public/assets/img/about.jpg";
import styles from "./content.module.css";

export default function Content({ title, children }) {
  return (
    <article className={styles.container}>
        <Image src={about} alt="" className={styles.image}></Image>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.contentContainer}>{children}</div>
    </article>
  );
}
