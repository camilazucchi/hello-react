import Banner from "@component/components/banner";
import Footer from "@component/components/footer";
import Navigation from "@component/components/navigation";
import Post from "@component/components/post";
import data from "../json/data.json";
import styles from "../components/post/post.module.css";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Banner />
      <ul className={styles.posts}>
        {data.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  )
}
