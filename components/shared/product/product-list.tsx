import ProductCard from "./product-card";
import { supabase } from "@/lib/supabase";

const ProductList = async () => {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    return <p>Failed to load products.</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(products ?? []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
