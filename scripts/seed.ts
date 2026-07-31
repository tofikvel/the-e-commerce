import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import { products } from "@/scripts/products";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!);

async function seed() {
  try {
    const productsToInsert = products.map(({ id, ...product }) => product);

    const { error } = await supabase.from("products").insert(productsToInsert);

    if (error) throw error;

    console.log(`✅ Seeded ${productsToInsert.length} products.`);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }
}

seed();
