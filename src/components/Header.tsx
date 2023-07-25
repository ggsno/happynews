"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 bg-white w-screen h-[var(--header-height)] flex justify-center">
      <div className="flex justify-between text-lg p-5 w-[var(--content-width)]">
        <h1>행복한 소식</h1>
        <Link
          href={"/overview"}
          className={`${pathname === "/overview" ? "hidden" : ""}`}
        >
          전체 보기
        </Link>
      </div>
    </div>
  );
}
