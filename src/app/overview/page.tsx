import Link from "next/link";
import { getArticles } from "@/api/article";

export default async function Overview() {
  const articles = await getArticles();

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="px-4 max-w-[var(--content-width)]">
          {articles.map((article) => (
            <Link
              href={`/${article.id}`}
              key={`article ${article.id}`}
              className="flex items-center h-16 w-full mb-4"
            >
              <div className="bg-yellow-300 h-16 w-4 shrink-0" />
              <div className="px-2">{article.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
