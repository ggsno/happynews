import { ArticleProps } from "@/components/Article";
import dummy from "../../public/dummynews.json";
import Header from "@/components/Header";
import ArticleContainer from "@/components/ArticleContainer";
import Navigator from "@/components/Navigator";

export default function Home() {
  const articles = dummy as ArticleProps[];

  return (
    <>
      <Header />
      <ArticleContainer articles={articles} />
    </>
  );
}
