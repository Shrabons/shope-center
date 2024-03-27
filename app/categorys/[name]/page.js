"use client";

import NotFond from "@/components/NotFond";
import ProductCard from "@/components/ProductCard";
import getProducts from "@/data/product";
import { useEffect, useState } from "react";

const CategoryProductPage = ({ params }) => {
  const categoricsName = params.name;
  const products = getProducts();
  const [productShow, setProductShow] = useState(products);

  useEffect(() => {
    if (categoricsName === "all") {
      setProductShow(products);
    } else {
      let productCatchCategory = products.filter((prodcutList) => {
        return prodcutList.category === categoricsName;
      });
      setProductShow(productCatchCategory);
    }
  }, []);

  return (
    <>
      {productShow.length === 0 ? (
        <NotFond />
      ) : (
        productShow?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
    </>
  );
};

export default CategoryProductPage;
