"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error, rest }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-[#344B5F] w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl text-white font-semibold my-4">
        {" "}
        Something's wrong here...{" "}
      </h1>
      <h2 className="text-yellow-500 text-xl mb-3">{error?.message}</h2>
      <div>
        <button
          onClick={() => rest()}
          className="bg-white py-1 px-4 text-xl mr-5 border rounded-md"
        >
          Try again
        </button>
        <button
          onClick={() => router.push("/")}
          className="bg-white py-1 px-4 text-xl border rounded-md"
        >
          Home
        </button>
      </div>
    </div>
  );
}
