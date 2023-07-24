import Image from "next/image";

export type ArticleProps = {
  title: string;
  summary: string;
  link: string;
};

export default function Article(props: ArticleProps) {
  const { title, summary, link } = props;

  return (
    <>
      <article className="rounded-lg h-full overflow-hidden border">
        <div className="h-1/2 relative">
          <Image src="/1.jpg" fill alt="thumbnail" className="object-cover" />
        </div>
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
