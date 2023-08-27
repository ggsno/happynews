import ArticleContainer from "@/components/ArticleContainer";
import { getArticles } from "@/api/article";

export default async function Shorts() {
  const articles = await getArticles();

  return (
    <>
      <ArticleContainer initArticles={articles} />
    </>
  );
}
