import Image from "next/image";
import catCrying from "../../../public/assets/img/catcrying.gif";
import styles from "./notfound.module.css";
import Button from "../button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <span className={styles.text404}>404</span>
      <h1 className={styles.title}>Oops! Page not found.</h1>
      <p className={styles.text}>
        The page you are looking for does not exist. <br></br>It might have been
        moved or deleted.
      </p>
      <Link href="/">
        <Button size="lg">Return</Button>
      </Link>

      <Image
        src={catCrying}
        alt="Cat crying."
        className={styles.gif}
        width={200}
      />
    </div>
  );
}
