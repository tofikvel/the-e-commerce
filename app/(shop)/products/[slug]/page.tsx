import getProduct from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;

  const { data: product, error } = await getProduct(slug);

  if (error || !product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-2 items-center max-w-7xl mx-auto p-6 border">
      <div className="single-product-image">
        <Image src={product.image} alt="product-image" width={450} height={450} priority={true} />
      </div>
      <div className="flex flex-col gap-4">
        <p>{product.brand}</p>
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductPage;
