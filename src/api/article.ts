import { ArticleProps } from "@/components/Article";

export const getArticles = async (id?: string): Promise<ArticleProps[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles${id ? `/${id}` : ""}`
  );

  if (!res.ok) {
    throw new Error(`Faild to fetch data. error code: ${res.status}`);
  }

  return res.json();
};
