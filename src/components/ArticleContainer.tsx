"use client";

import { ArticleProps } from "@/api/article";
import Article from "./Article";
import Navigator from "./Navigator";
import { useArticle } from "./useArticle";

export default function ArticleContainer({
  initArticles,
}: {
  initArticles: ArticleProps[];
}) {
  const { articles, setTarget } = useArticle(initArticles);

  return (
    <>
      {articles.map((article, i) => (
        <>
          <div
            key={`article ${article._id}`}
            className="flex-shrink-0 snap-start mb-4
              max-w-[var(--content-width)] w-full
              h-[calc(100vh-var(--header-height)-2rem)] snap-always"
          >
            <Article {...article} />
          </div>
          {i + 3 === articles.length ? <div ref={setTarget}></div> : null}
        </>
      ))}
      <Navigator />
    </>
  );
}
