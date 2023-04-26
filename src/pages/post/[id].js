import { useRouter } from "next/router";
import data from "../../json/data.json";
import Content from "@component/components/content/content";
import Banner from "@component/components/banner";
import Navigation from "@component/components/navigation";
import MarkdownRenderer from "@component/components/markdown";

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
    return <h1>Ops, post não encontrado!</h1>;
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
      </Content>
    </main>
  );
}
