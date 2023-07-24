import Article, { ArticleProps } from "./Article";

export default function ArticleContainer({
  articles,
}: {
  articles: ArticleProps[];
}) {
  return (
    <div className="flex justify-center">
      <div className="w-96 md:w-[var(--content-width-max)] ">
        <div className="h-[calc(100vh-var(--header-height))] mt-[var(--header-height)] snap-y snap-mandatory overflow-scroll">
          {articles.map((article, i) => (
            <div
              key={`article ${i}`}
              className="mb-4 h-[calc(100vh-var(--header-height)-2rem)] snap-start"
            >
              <Article {...article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
