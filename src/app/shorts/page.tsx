import ArticleContainer from "@/components/ArticleContainer";
import { getArticles } from "@/api/article";
import Image from "next/image";

export default async function Shorts() {
  const articles = await getArticles();

  return (
    <>
      <div
        id="ArticleContainer"
        className="flex flex-col items-center 
h-[calc(100vh-var(--header-height))] snap-y snap-mandatory 
overflow-scroll scrollbar-hide"
      >
        <ArticleContainer initArticles={articles} />
        <Image src={"/loading.gif"} height={50} width={50} alt="loading" />
      </div>
    </>
  );
}
