import { products } from "@/src/data/products";
import Image from "next/image";

const LandingPage = async () => {
  return (
    <div className="grid grid-cols-4 justify-items-center items-center gap-4 p-4">
      {products.map((product) => (
        <div className="flex flex-col p-2 space-y-3 border" key={product.id}>
          <div className="product-image">
            <Image src={`${product.image}`} width={150} height={150} alt="product-image" />
          </div>
          <div className="product-details">
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
