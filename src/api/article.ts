import { ArticleProps } from "@/components/Article";
import { NextResponse } from "next/server";
import dummy from "./dummyArticles.json";

export const getArticles = async (id?: string): Promise<ArticleProps[]> => {
  // const res = await fetch(`${BACKEND_URL}/api/article${id ? `?id=${id}` : ""}`);

  // if (!res.ok) {
  //   throw new Error(`Faild to fetch data. error code: ${res.status}`);
  // }

  // return res.json();

  return NextResponse.json(dummy).json();
};
