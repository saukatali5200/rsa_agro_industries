import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Leaf, Phone, ArrowRight, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products — Mustard Oil & Oil Cake",
  description:
    "Browse RSA Agro Industries products: 1L, 5L, 15L mustard oil bottles, bulk supply, and oil cake cattle feed. Best prices direct from the mill.",
};

export default function ProductsPage() {
  const oilProducts     = getProductsByCategory("oil");
  const oilcakeProducts = getProductsByCategory("oilcake");

  return (
    <>
      {/* HERO */}
      <section className="relative py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--bg-page) 30%, transparent)",
          }}
        />
        <div className="container relative z-10 max-w-3xl text-center">
          <span className="theme-badge inline-flex mb-4">FSSAI Certified</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="theme-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
            Pure cold-pressed mustard oil in every size, and high-protein oil cake for
            livestock. All dispatched directly from our mill in Sanganer.
          </p>
        </div>
      </section>

      {/* MUSTARD OIL */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5 theme-accent" />
            </div>
            <div>
              <span className="theme-badge inline-flex mb-1 text-xs">Mustard Oil</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold theme-text">
                Pure Kachi Ghani Mustard Oil
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {oilProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* OIL CAKE */}
      <section className="section-pad">
        <div className="container">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5 theme-accent" />
            </div>
            <div>
              <span className="theme-badge inline-flex mb-1 text-xs">Oil Cake</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold theme-text">
                High-Protein Cattle Feed
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {oilcakeProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BULK BANNER */}
      <section className="pb-12 sm:pb-16">
        <div className="container max-w-4xl">
          <div className="theme-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden">
            <div
              className="absolute right-0 top-0 bottom-0 w-1/3"
              style={{
                background:
                  "radial-gradient(ellipse at right, var(--accent-subtle), transparent)",
              }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
              <div className="w-14 h-14 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                <Truck className="w-7 h-7 theme-accent" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-extrabold theme-text mb-1.5">
                  Bulk Orders Welcome!
                </h3>
                <p className="theme-text-secondary text-sm leading-relaxed">
                  Min. order 200L for bulk. Tanker loads & custom packaging also
                  available. Contact us for best wholesale pricing.
                </p>
              </div>
              <div className="flex flex-col xs:flex-row sm:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
                <a href={`tel:${SITE.phone}`} className="w-full sm:w-auto">
                  <button className="theme-btn-primary w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap">
                    <Phone className="w-4 h-4" /> Call Now
                  </button>
                </a>
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="theme-btn-outline w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm">
                    Enquire <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
