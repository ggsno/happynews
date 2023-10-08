"use client";

import Link from "next/link";
import { useArticle } from "./useArticle";
import { ArticleProps } from "@/api/article";

export default function OverviewContainer({
  initArticles,
}: {
  initArticles: ArticleProps[];
}) {
  const { articles, setTarget } = useArticle(initArticles);

  const getColor = (prob: number) => {
    if (prob > 0.638) return "bg-yellow-400";
    if (prob > 0.6378) return "bg-yellow-300";
    if (prob > 0.6376) return "bg-yellow-200";
    return "bg-yellow-100";
  };

  return (
    <>
      {articles.map((article, i) => (
        <>
          <Link
            href={`/shorts/${article._id}`}
            key={`article ${article._id}/${i}`}
            className={`flex items-center h-16 w-full mb-4`}
          >
            <div className={`${getColor(article.prob)} h-16 w-4 shrink-0`} />
            <div className="px-2">{article.title}</div>
          </Link>
          {i + 3 === articles.length ? <div ref={setTarget}></div> : null}
        </>
      ))}
    </>
  );
}
