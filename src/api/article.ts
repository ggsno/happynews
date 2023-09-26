export type ArticleProps = {
  _id: string;
  title: string;
  summary: string;
  link: string;
  prob: number;
};

export const getArticles = async (id?: string): Promise<ArticleProps[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles${id ? `/${id}` : ""}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Faild to fetch data. error code: ${res.status}`);
  }

  return res.json();
};
