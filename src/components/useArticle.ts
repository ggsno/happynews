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
    window.history.pushState(
      {},
      "",
      window.location.pathname.replace(/\/[^/]*$/, "") + `/${target.id}`
    );
  };
  const { setTarget } = useIntersectionObserver({ onIntersect, threshold: 1 });

  return { setTarget };
};
