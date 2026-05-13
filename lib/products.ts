// =============================================================
// src/lib/products.ts
// Static product catalog data
// =============================================================

import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // ── OIL PRODUCTS ────────────────────────────────────────────
  {
    id: "mustard-oil-1l",
    name: "Mustard Oil 1L Bottle",
    slug: "mustard-oil-1l",
    price: 180,
    unit: "per bottle",
    packaging: "1L HDPE Bottle",
    category: "oil",
    description:
      "Pure cold-pressed mustard oil packed in food-grade 1-litre HDPE bottles. Ideal for household cooking with authentic pungent aroma and rich flavour.",
    features: [
      "100% pure cold-pressed oil",
      "Food-grade HDPE bottle",
      "Tamper-proof seal",
      "FSSAI certified",
      "Authentic pungent aroma",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/mustard-oil-1l.jpg",
  },
  {
    id: "mustard-oil-5l",
    name: "Mustard Oil 5L Jar",
    slug: "mustard-oil-5l",
    price: 840,
    unit: "per jar",
    packaging: "5L HDPE Jar",
    category: "oil",
    description:
      "Economy 5-litre mustard oil jar perfect for medium-sized families and small restaurants. Same quality at better per-litre value.",
    features: [
      "5-litre economy pack",
      "Pure cold-pressed oil",
      "Wide-mouth easy-pour jar",
      "FSSAI certified",
      "Best value for families",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/mustard-oil-5l.jpg",
  },
  {
    id: "mustard-oil-15l",
    name: "Mustard Oil 15L Tin",
    slug: "mustard-oil-15l",
    price: 2400,
    unit: "per tin",
    packaging: "15L Tin Container",
    category: "oil",
    description:
      "Commercial-grade 15-litre tin ideal for restaurants, dhabas, caterers, and small businesses. Sturdy tin packaging ensures freshness and easy stacking.",
    features: [
      "15-litre commercial pack",
      "Heavy-duty tin container",
      "Ideal for restaurants & caterers",
      "Rust-resistant tin lid",
      "Bulk pricing available",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/mustard-oil-15l.jpg",
  },
  {
    id: "bulk-mustard-oil",
    name: "Bulk Mustard Oil",
    slug: "bulk-mustard-oil",
    price: 145,
    unit: "per litre",
    packaging: "200L Barrel / Tanker",
    category: "oil",
    description:
      "Industrial bulk mustard oil in 200-litre barrels or by tanker. Best rates for large-scale distributors, factories, and food processors.",
    features: [
      "Minimum order 200 litres",
      "Available in barrels or tanker",
      "Best wholesale pricing",
      "Direct from mill — no middlemen",
      "Custom packaging on request",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/bulk-mustard-oil.jpg",
  },

  // ── OIL CAKE PRODUCTS ───────────────────────────────────────
  {
    id: "oil-cake-50kg",
    name: "Mustard Oil Cake 50kg",
    slug: "oil-cake-50kg",
    price: 28,
    unit: "per kg",
    packaging: "50kg Gunny Bag",
    category: "oilcake",
    description:
      "High-protein mustard oil cake — a nutritious by-product of oil extraction. Widely used as cattle and poultry feed. Rich in protein and essential minerals.",
    features: [
      "High protein content (~35%)",
      "Natural cattle & poultry feed",
      "50kg gunny bag packaging",
      "No artificial additives",
      "Bulk supply available",
    ],
    inStock: true,
    gstRate: 0,
    hsnCode: "2306",
    image: "/images/oil-cake.jpg",
  },
  {
    id: "oil-cake-25kg",
    name: "Mustard Oil Cake 25kg",
    slug: "oil-cake-25kg",
    price: 30,
    unit: "per kg",
    packaging: "25kg Gunny Bag",
    category: "oilcake",
    description:
      "Premium mustard oil cake in convenient 25kg bags. Perfect for small farms and dairy owners. Boosts milk production and livestock health naturally.",
    features: [
      "25kg convenient bag",
      "Boosts milk production",
      "No synthetic additives",
      "Rich in omega-3 fatty acids",
      "FSSAI compliant",
    ],
    inStock: true,
    gstRate: 0,
    hsnCode: "2306",
    image: "/images/oil-cake.jpg",
  },
  {
    id: "oil-cake-pellets",
    name: "Oil Cake Pellets",
    slug: "oil-cake-pellets",
    price: 32,
    unit: "per kg",
    packaging: "50kg Woven Bag",
    category: "oilcake",
    description:
      "Compressed mustard oil cake pellets for easy handling and feeding. Uniform size ensures consistent nutrition. Preferred by modern dairy farms.",
    features: [
      "Pelletized for easy feeding",
      "Uniform nutritional density",
      "Reduced wastage",
      "Long shelf life",
      "Ideal for large dairy farms",
    ],
    inStock: true,
    gstRate: 0,
    hsnCode: "2306",
    image: "/images/oil-cake.jpg",
  },
  {
    id: "oil-cake-bulk",
    name: "Bulk Oil Cake Supply",
    slug: "oil-cake-bulk",
    price: 25,
    unit: "per kg",
    packaging: "1 Tonne+ Bulk",
    category: "oilcake",
    description:
      "Wholesale bulk oil cake supply for large dairy farms, poultry units, and feed manufacturers. Best pricing on 1-tonne or more orders. Direct from mill.",
    features: [
      "Minimum 1 tonne order",
      "Lowest per-kg pricing",
      "Custom packaging available",
      "Pan-India delivery",
      "Direct mill pricing",
    ],
    inStock: true,
    gstRate: 0,
    hsnCode: "2306",
    image: "/images/oil-cake.jpg",
  },
];

/** Helper: find product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Helper: filter products by category */
export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

/** Helper: get first N products by category */
export function getTopProductsByCategory(
  category: Product["category"],
  limit = 4
): Product[] {
  return PRODUCTS.filter((p) => p.category === category).slice(0, limit);
}
