import { ArticleProps } from "@/components/Article";
import dummy from "../../../public/dummynews.json";
import ArticleContainer from "@/components/ArticleContainer";

export default function Home({ params }: { params: { id?: string[] } }) {
  // 백엔드가 완성될때까지 쓸 임시 파일
  const articles = dummy as ArticleProps[];
  if (params.id !== undefined)
    articles.sort((a) => (a.id === params.id![0] ? -1 : 0));

  return (
    <>
      <ArticleContainer articles={articles} />
    </>
  );
}
