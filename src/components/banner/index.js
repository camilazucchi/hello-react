import styles from "./banner.module.css";
import Image from "next/image";
import cato from "../../../public/assets/img/cato.jpg"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello, world!</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum
          felis justo, vel bibendum mi rhoncus nec. Fusce quis sapien vitae
          metus rutrum vehicula vel ac ex. Integer vitae tellus in tellus
          dapibus ullamcorper.
        </p>
      </div>

      <Image src={cato}
      alt="Orange cat licking his nose"
      className={styles.picture}
      />
    </div>
  );
}