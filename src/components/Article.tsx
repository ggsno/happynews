"use client";

import { ArticleProps } from "@/api/article";
import { useArticleUrl } from "./useArticle";

export default function Article(props: ArticleProps) {
  const { _id: id, title, summary, link, prob } = props;
  const { setTarget } = useArticleUrl();
  const getColor = (prob: number) => {
    if (prob > 0.638) return "bg-yellow-400";
    if (prob > 0.6378) return "bg-yellow-300";
    if (prob > 0.6376) return "bg-yellow-200";
    return "bg-yellow-100";
  };

  return (
    <>
      <article
        id={id}
        ref={setTarget}
        className="rounded-lg h-full overflow-hidden border"
      >
        <div className={`h-1/2 ${getColor(prob)}`}>
          <div className="flex justify-end h-full">
            <a
              href={link}
              target="_blank"
              className="self-end p-2 opacity-70 text-sm"
            >
              원문 보러가기 &gt;
            </a>
          </div>
        </div>
        <div className="p-5 h-1/2 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-lg">{title}</h1>
            <div className="my-2">{summary}</div>
          </div>
        </div>
      </article>
    </>
  );
}
