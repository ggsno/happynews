import { NextResponse } from "next/server";
import dummyArticles from "./dummyArticles.json";

/**
 * 개발용 api
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const articles = dummyArticles.slice();
  articles.sort(() => Math.random() - 0.5);
  if (id) {
    articles.sort((a) => (a.id === id ? -1 : 0));
  }

  return NextResponse.json(articles);
}
