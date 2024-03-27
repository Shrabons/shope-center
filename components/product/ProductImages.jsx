"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ product }) => {
  const thumbnail = product.images.slice(-1)[0];
  const productImg = product.images.slice(0, -1);
  let urlImg = thumbnail ?? product.thumbnail;
  const [imgchange, setImageChange] = useState(urlImg);

  const handleImageChange = (url) => {
    setImageChange(url);
  };

  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Image
        src={imgchange}
        className="w-[400px] h-[500px] mx-auto object-cover "
        width={400}
        height={500}
        alt=""
      />
      <div className="flex gap-4 mt-4">
        {productImg?.map((img) => (
          <Image
            key={img}
            src={img}
            className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
            width={100}
            height={100}
            alt="image"
            onClick={() => handleImageChange(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
