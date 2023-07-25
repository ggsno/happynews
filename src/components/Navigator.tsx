"use client";

import { useEffect, useRef, useState } from "react";

export default function Navigator() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(true);

  const goUp = () => {
    containerRef.current?.scrollBy({
      top: -innerHeight,
      behavior: "smooth",
    });
  };

  const goDown = () => {
    containerRef.current?.scrollBy({
      top: innerHeight,
      behavior: "smooth",
    });
  };

  const isAtTop = () => containerRef.current?.scrollTop! === 0;

  const isAtBottom = () =>
    containerRef.current?.scrollHeight! -
      (containerRef.current?.scrollTop! + containerRef.current?.clientHeight!) +
      32 <
    containerRef.current?.clientHeight!;

  useEffect(() => {
    containerRef.current = document.querySelector("#ArticleContainer");
    if (containerRef.current) {
      setAtTop(isAtTop());
      setAtBottom(isAtBottom());
    }

    const handleScroll = () => {
      setAtTop(isAtTop());
      setAtBottom(isAtBottom());
    };

    containerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden sm:flex flex-col fixed bottom-10 right-10 ">
      <button
        onClick={goUp}
        disabled={atTop}
        className="disabled:text-gray-400"
      >
        up
      </button>
      <button
        onClick={goDown}
        disabled={atBottom}
        className="disabled:text-gray-400"
      >
        down
      </button>
    </div>
  );
}
