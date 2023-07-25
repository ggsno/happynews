export type ArticleProps = {
  id: string;
  title: string;
  summary: string;
  link: string;
};

export default function Article(props: ArticleProps) {
  const { title, summary, link } = props;

  return (
    <>
      <article className="rounded-lg h-full overflow-hidden border">
        <div className="h-1/2 bg-yellow-300" />
        <div className="p-5">
          <h1 className="font-bold text-lg">{title}</h1>
          <div className="my-2">{summary}</div>
          <a href={link} target="_blank">
            원문 보러가기 &gt;
          </a>
        </div>
      </article>
    </>
  );
}
