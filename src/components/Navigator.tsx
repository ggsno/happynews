"use client";

export default function Navigator() {
  const goUp = () => {
    if (window) {
      scrollTo({
        top: innerHeight / 2,
        behavior: "smooth",
      });
    }
  };

  const goDown = () => {
    if (window) {
      scrollBy({
        top: innerHeight / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col">
      <button onClick={goUp}>up</button>
      <button onClick={goDown}>down</button>
    </div>
  );
}
