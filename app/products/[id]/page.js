import ProductDetails from "@/components/product/ProductDetails";
import ProductImages from "@/components/product/ProductImages";
import getProducts from "@/data/product";

const SingleProduct = ({ params }) => {
  const { id } = params;
  const products = getProducts();
  const singleProductCatch = products.find((product) => {
    return product.id.toString() === id;
  });

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <ProductImages product={singleProductCatch} />
          <ProductDetails product={singleProductCatch} />
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
