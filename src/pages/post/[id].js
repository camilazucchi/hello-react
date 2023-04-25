import { useRouter } from "next/router";

export default function Posts() {
    const router = useRouter();
    const params = router.query.id;
    console.log(params);

    return (
        <h1>Teste de post #{params} </h1>
    )
}