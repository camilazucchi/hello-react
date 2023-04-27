import { useRouter } from "next/router";
import data from "../../json/data.json";
import Content from "@component/components/content/content";
import Banner from "@component/components/banner";
import Navigation from "@component/components/navigation";
import MarkdownRenderer from "@component/components/markdown";
import Button from "@component/components/button";
import Link from "next/link";
import NotFound from "@component/components/notfound";
import Footer from "@component/components/footer";

export default function Posts() {
  const router = useRouter();
  const params = router.query.id;
  if (!params) {
    return <div>Loading...</div>;
    // adiciona a validação.
  }

  const post = data.find((post) => post.id === Number(params));
  console.log(post);

  if (!post) {
    return (
      <main>
        <Navigation />
        <NotFound />
        <Footer />
      </main>
    );
    // retorna caso o post não for encontrado.
  }

  return (
    <main>
      <Navigation />
      <Banner />
      <Content
        img={`/public/assets/img/posts/${post.id}/header.jpg`}
        title={post.title}
      >
        <MarkdownRenderer>{post.text}</MarkdownRenderer>
        <Link href="/">
          <Button>Return</Button>
        </Link>
      </Content>
    </main>
  );
}
