import { ArticleProps } from "@/components/Article";

/**
 * 백엔드 api가 완성되면 id 활용 가능
 * 현재는 전달된 id 무시
 */
export const getArticles = async (id?: string): Promise<ArticleProps[]> => {
  const res = await fetch(
    "https://happynewsdev.s3.amazonaws.com/dummynews.json"
  );
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
};
