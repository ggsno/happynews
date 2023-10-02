"use client";

import Link from "next/link";
import { useArticle } from "./useArticle";
import { ArticleProps } from "@/api/article";
import Image from "next/image";

export default function OverviewContainer({
  initArticles,
}: {
  initArticles: ArticleProps[];
}) {
  const { articles, setTarget } = useArticle(initArticles);

  return (
    <>
      <div ref={setTarget}></div>
      {articles.map((article, i) => (
        <>
          <Link
            href={`/shorts/${article._id}`}
            key={`article ${article._id}/${i}`}
            className={`flex items-center h-16 w-full mb-4`}
          >
            <div className="bg-yellow-300 h-16 w-4 shrink-0" />
            <div className="px-2">{article.title}</div>
          </Link>
          {i + 3 === articles.length ? <div ref={setTarget}></div> : null}
        </>
      ))}
      <Image src={"/loading.gif"} height={50} width={50} alt="loading" />
    </>
  );
}
