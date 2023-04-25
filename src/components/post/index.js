import Link from "next/link";
import styles from "./post.module.css";

export default function Post({ post }) {
  return (
    <Link
      href={{
        pathname: "/post/[id]",
        query: { id: post.id },
      }}
    >
      <div className={styles.post}>
        <img
          className={styles.header}
          src={`/assets/img/posts/${post.id}/header.jpg`}
          alt="Capa do post"
        />
        <h2 className={styles.title}>{post.title}</h2>
        <button className={styles.button}>Read</button>
      </div>
    </Link>
  );
}
