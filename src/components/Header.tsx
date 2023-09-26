import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 bg-white w-screen h-[var(--header-height)] flex justify-center">
      <div className="flex justify-between items-center px-4 text-lg w-[var(--content-width)]">
        <Link href={"/overview"}>
          <Image
            src="/happiest_sun.gif"
            width={60}
            height={60}
            alt="행복한 소식"
            className="transform hover:scale-[10] duration-[20000ms] delay-[3000ms] origin-top-left"
          />
        </Link>
      </div>
    </div>
  );
}
