import Article, { ArticleProps } from "./Article";

export default function ArticleContainer({
  articles,
}: {
  articles: ArticleProps[];
}) {
  return (
    <div
      id="ArticleContainer"
      className="flex flex-col items-center mt-[var(--header-height)] 
    h-[calc(100vh-var(--header-height))] snap-y snap-mandatory 
    overflow-scroll scrollbar-hide"
    >
      {articles.map((article, i) => (
        <div
          key={`article ${i}`}
          className="flex-shrink-0 snap-start mb-4 max-w-[var(--content-width)]
            h-[calc(100vh-var(--header-height)-2rem)]"
        >
          <Article {...article} />
        </div>
      ))}
    </div>
  );
}
