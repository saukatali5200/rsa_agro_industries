"use client";

import React, { useState } from "react";
import { ShoppingCart, Check, Package, Droplets, Leaf } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const CategoryIcon = product.category === "oil" ? Droplets : Leaf;

  return (
    <div className="theme-card flex flex-col overflow-hidden animate-fade-in h-full">
      {/* Image area */}
      <div
        className="relative h-40 sm:h-44 overflow-hidden flex-shrink-0"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, var(--accent-subtle), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: "var(--accent-subtle)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <CategoryIcon className="w-8 h-8 sm:w-10 sm:h-10 theme-accent" />
          </div>
        </div>
        {/* Badges */}
        <div className="absolute top-2 left-2">
          <span
            className={cn(
              "theme-badge text-xs",
              product.inStock ? "theme-badge-success" : "theme-badge-danger"
            )}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span className="theme-badge text-xs">
            {product.category === "oil" ? "Oil" : "Cake"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 sm:p-4 gap-2">
        <div>
          <h3 className="font-bold text-sm sm:text-base theme-text leading-snug line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-1 mt-1.5">
            <span className="text-lg sm:text-xl font-extrabold text-gradient">
              {formatINR(product.price)}
            </span>
            <span className="text-xs theme-text-muted">{product.unit}</span>
          </div>
        </div>

        <p className="theme-text-secondary text-xs leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 text-xs theme-text-muted">
          <Package className="w-3 h-3 theme-accent flex-shrink-0" />
          <span className="truncate">{product.packaging}</span>
        </div>

        <ul className="space-y-1">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs theme-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full theme-accent-bg flex-shrink-0" />
              <span className="line-clamp-1">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2 border-t theme-divider flex items-center justify-between">
          <span className="text-xs theme-text-muted">
            GST {product.gstRate}% · HSN {product.hsnCode}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || added}
          className={cn(
            "w-full py-2 px-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200",
            added
              ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-default"
              : product.inStock
              ? "theme-btn-primary"
              : "opacity-40 cursor-not-allowed theme-elevated theme-text-muted"
          )}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
