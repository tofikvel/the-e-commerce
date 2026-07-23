import { products } from "@/src/data/products";
import Image from "next/image";

const LandingPage = async () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      {products.map((product) => (
        <div className="flex items-center border p-2 w-100 gap-3" key={product.id}>
          <div className="product-image">
            <Image src={`${product.image}`} width={150} height={150} alt="product-image" />
          </div>
          <div className="product-details">
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
