import Image from "next/image";

const ProductImages = ({ product }) => {
  const thumbnail = product.images.slice(-1)[0];
  const productImg = product.images.slice(0, -1);
  const urlImg = thumbnail ?? product.thumbnail;

  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Image
        src={urlImg}
        className="w-[400px] h-[500px] mx-auto object-cover"
        width={400}
        height={500}
        alt=""
      />
      <div className="flex gap-4 mt-4">
        {productImg?.map((img) => (
          <Image
            key={img}
            src={img}
            className="w-[100px] h-[100px] mx-auto border object-cover"
            width={100}
            height={100}
            alt="image"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
