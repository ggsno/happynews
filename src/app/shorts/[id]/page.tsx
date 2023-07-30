import ArticleContainer from "@/components/ArticleContainer";
import { getArticles } from "@/api/article";

export default async function Shorts({ params }: { params: { id: string } }) {
  const articles = await getArticles(params.id);

  return (
    <>
      <ArticleContainer articles={articles} />
    </>
  );
}
