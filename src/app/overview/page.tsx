import { getArticles } from "@/api/article";
import OverviewContainer from "@/components/OverviewContainer";

export default async function Overview() {
  const articles = await getArticles();

  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="px-4 max-w-[var(--content-width)]">
          <OverviewContainer initArticles={articles} />
        </div>
      </div>
    </>
  );
}
