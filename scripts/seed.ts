import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { createClient } from "@supabase/supabase-js";
import { products } from "@/scripts/products";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!);

async function seed() {
  // Remove id because Supabase generates it automatically
  const productsToInsert = products.map(({ id, ...product }) => product);

  const { error } = await supabase.from("products").insert(productsToInsert);

  if (error) {
    console.error(error);
    return;
  }

  console.log("✅ Seed completed!");
}

seed();
