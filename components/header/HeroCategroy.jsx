"use client";
import { usePathname } from "next/navigation";

const HeroCategroy = () => {
  const pathName = usePathname();

  return (
    <header className="h-[500px] bg-center justify-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]">
      <div className="bg-[rgba(0,0,0,0.7)] h-[500px] justify-center flex flex-col-reverse ">
        <h1 className=" text-white text-3xl lg:text-4xl text-center font-bold tracking-wider capitalize">
          {pathName.substr(1, pathName.length)}
        </h1>
      </div>
    </header>
  );
};

export default HeroCategroy;
