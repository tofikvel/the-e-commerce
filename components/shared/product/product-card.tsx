import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <>
      <Card className="w-full max-w-sm hover:shadow-lg hover:-translate-y-1 transition">
        <Link href={`/products/${product.slug}`}>
          <CardHeader className="p-0 justify-center items-center">
            <Image src={product.images[0]} alt={product.title} width={300} height={300} priority={true} />
          </CardHeader>
          <CardContent className="grid p-4 gap-4">
            <div className="text-xs">{product.brand}</div>
            <h2 className="text-sm font-medium">{product.title}</h2>
            <div className="flex justify-between gap-4">
              <p>⭐ {product.rating}</p>
              {product.stock > 0 ? <p>${product.price}</p> : <p className="text-red-500">Out of stock</p>}
            </div>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default ProductCard;
