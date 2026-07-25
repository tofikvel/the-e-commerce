import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="p-0 justify-center items-center">
          <Link href={`/product/${product.slug}`}>
            <Image src={product.image} alt={product.title} width={300} height={300} priority={true} />
          </Link>
        </CardHeader>
        <CardContent className="grid p-4 gap-4">
          <div className="text-xs">{product.brand}</div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm font-medium">{product.title}</h2>
          </Link>
          <div className="flex justify-between gap-4">
            <p>{product.rating} Stars</p>
            {product.stock > 0 ? product.price : <p className="text-red-500">Out of stock</p>}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
