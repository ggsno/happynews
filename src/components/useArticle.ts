"use client";

import { useState } from "react";
import { ArticleProps } from "./Article";
import { getArticles } from "@/api/article";
import useIntersectionObserver from "./useIntersectionObserver";

export const useArticle = (initArticles: ArticleProps[]) => {
  const [articles, setArticles] = useState(initArticles);

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (!isIntersecting) return;

    const newArticles = await getArticles();
    if (newArticles.length === 0) return;
    setArticles([...articles, ...newArticles]);
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return { articles, setTarget };
};

export const useArticleUrl = () => {
  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting, target },
  ]) => {
    if (!isIntersecting) return;
    const SHORTS_URL = "/shorts";
    const index = window.location.pathname.indexOf(SHORTS_URL);
    if (index === -1) {
      console.error(`cannot find ${SHORTS_URL} in url.`);
      return;
    }
    window.history.pushState(
      {},
      "",
      window.location.pathname.substring(0, index + SHORTS_URL.length) +
        `/${target.id}`
    );
  };
  const { setTarget } = useIntersectionObserver({ onIntersect, threshold: 1 });

  return { setTarget };
};
