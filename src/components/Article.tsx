"use client";

import { useArticleUrl } from "./useArticle";

export type ArticleProps = {
  id: string;
  title: string;
  summary: string;
  link: string;
  prob: number;
};

export default function Article(props: ArticleProps) {
  const { id, title, summary, link, prob } = props;
  const { setTarget } = useArticleUrl();

  return (
    <>
      <article
        id={id}
        ref={setTarget}
        className="rounded-lg h-full overflow-hidden border"
      >
        <div className={`h-1/2 bg-yellow-300`} />
        <div className="p-5 h-1/2 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-lg">{title}</h1>
            <div className="my-2">{summary}</div>
          </div>
          <div className="text-right">
            <a href={link} target="_blank">
              원문 보러가기 &gt;
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
