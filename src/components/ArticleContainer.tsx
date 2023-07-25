import Article, { ArticleProps } from "./Article";
import Navigator from "./Navigator";

export default function ArticleContainer({
  articles,
}: {
  articles: ArticleProps[];
}) {
  return (
    <>
      <div
        id="ArticleContainer"
        className="flex flex-col items-center 
    h-[calc(100vh-var(--header-height))] snap-y snap-mandatory 
    overflow-scroll scrollbar-hide"
      >
        {articles.map((article) => (
          <div
            key={`article ${article.id}`}
            className="flex-shrink-0 snap-start mb-4
              max-w-[var(--content-width)] w-full
              h-[calc(100vh-var(--header-height)-2rem)]"
          >
            <Article {...article} />
          </div>
        ))}
      </div>
      <Navigator />
    </>
  );
}
