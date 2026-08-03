import getProduct from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductImages from "@/components/shared/product/product-images";

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
    <section className="grid grid-cols-1 md:grid-cols-5 max-w-7xl mx-auto p-6 border">
      <div className="col-span-2">
        <div className="flex flex-col">
          <ProductImages images={product.images} />
        </div>
      </div>
      <div className="col-span-2 p-5">
        <div className="flex flex-col gap-5">
          <p>
            {product.brand} / {product.category}
          </p>
          <h1 className="font-bold text-3xl">{product.title}</h1>
          <p>⭐ {product.rating}</p>
          <p>${product.price}</p>
          <p>{product.description}</p>
          {product.stock === 0 && <p className="text-red-500">Out of stock</p>}
          <Button className="cursor-pointer" disabled={product.stock === 0}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
