import { products } from "@/src/data/products";
import Image from "next/image";

const LandingPage = async () => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-4 p-4">
      {products.map((product) => (
        <div className="flex items-center border p-2 w-[400px] gap-3" key={product.id}>
          <div className="product-image">
            <Image src={`${product.image}`} width={150} height={150} alt="product-image" />
          </div>
          <div className="product-details">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
