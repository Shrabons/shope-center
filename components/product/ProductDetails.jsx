import Link from "next/link";
import ProductRating from "./ProductRating";

const ProductDetails = ({ product }) => {
  return (
    <div className="w-full lg:w-5/12">
      <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
        {product?.title}
      </h1>
      <Link
        href={`/categorys/${product?.category}`}
        className="text-[#919090] my-3"
      >
        {product?.category}
      </Link>
      <ProductRating rating={product?.rating} />
      <hr className="my-5 bg-black" />

      <div>
        <p className="my-3">
          <span className="text-rose-600 opacity-60 line-through">
            ${product?.discountPercentage}
          </span>
          <span className="font-bold text-2xl"> ${product?.price}</span>
        </p>
      </div>
      <div>
        <p className="leading-7">{product?.description}</p>

        <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
          Add To Cart - ${product?.price}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
