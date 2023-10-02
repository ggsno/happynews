import { getArticles } from "@/api/article";
import OverviewContainer from "@/components/OverviewContainer";
import Image from "next/image";

export default async function Overview() {
  const articles = await getArticles();

  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="px-4 w-[var(--content-width)]">
          <OverviewContainer initArticles={articles} />
          <Image src={"/loading.gif"} height={50} width={50} alt="loading" />
        </div>
      </div>
    </>
  );
}
