"use client";
import getProducts from "@/data/product";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const products = getProducts();
  const router = useRouter();

  let categoricsValue = [];
  let cate = products.map((item) => {
    if (!categoricsValue.includes(item.category)) {
      categoricsValue.push(item.category);
    }
  });

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <button
        onClick={() => router.push(`/categorys/all`)}
        className={`${
          pathName === `/categorys/all`
            ? " border-b border-green-500 text-green-500"
            : ""
        } hover:border-b border-black block h-6 box-border mt-5`}
      >
        All
      </button>
      {categoricsValue.map((nameCategory) => (
        <button
          onClick={() => router.push(`/categorys/${nameCategory}`)}
          key={nameCategory}
          className={`${
            pathName === `/categorys/${nameCategory}`
              ? " border-b border-green-500 text-green-500"
              : ""
          } hover:border-b border-black block h-6 box-border mt-5 capitalize`}
        >
          {nameCategory}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
