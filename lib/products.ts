import { supabase } from "@/lib/supabase";

const getProduct = async (slug: string) => {
  const { data, error } = await supabase.from("products").select("*").eq("slug", slug).single();

  return { data, error };
};

export default getProduct;
