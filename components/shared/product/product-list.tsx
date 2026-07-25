import { products } from "@/src/data/products";
import Image from "next/image";
import ProductCard from "./product-card";

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-3">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
