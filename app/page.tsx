import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets, Leaf, Award, Truck, ShieldCheck,
  ArrowRight, Phone, Star, Users, Factory, Sparkles, CheckCircle2,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { getTopProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Manufacturer of Pure Oils & Oil Cake & Supplier India",
  description:
    "RSA Agro Industries — trusted manufacturer of cold-pressed mustard oil and oil cake. FSSAI certified. Wholesale & retail supply across India.",
};

const STATS = [
  { value: "20+",  label: "Years Experience", icon: Factory },
  { value: "500+", label: "Happy Customers",  icon: Users   },
  { value: "100%", label: "Pure Quality",     icon: Award   },
  { value: "5★",   label: "Customer Rating",  icon: Star    },
];

const FEATURES = [
  {
    icon: Droplets,
    title: "Cold-Pressed Purity",
    desc: "Traditional Kachi Ghani extraction preserves all natural nutrients, aroma, and authentic flavour.",
  },
  {
    icon: ShieldCheck,
    title: "FSSAI Certified",
    desc: "Every batch is tested and certified to meet strict FSSAI food-safety standards. Quality you can trust.",
  },
  {
    icon: Truck,
    title: "Pan-India Supply",
    desc: "Reliable delivery from small retail orders to large industrial bulk quantities anywhere across India.",
  },
  {
    icon: Leaf,
    title: "Oil Cake (Cattle Feed)",
    desc: "High-protein mustard oil cake — a nutritious by-product ideal for cattle and poultry farming.",
  },
];

const PROMISES = [
  "No additives or blending — ever",
  "FSSAI certified every batch",
  "Direct from mill pricing",
  "Same-week dispatch",
  "Bulk & retail both welcome",
  "Trusted by 500+ customers",
];

export default function HomePage() {
  const oilProducts     = getTopProductsByCategory("oil",     4);
  const oilcakeProducts = getTopProductsByCategory("oilcake", 4);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-page) 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-48 h-48 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"
          style={{ background: "var(--accent-subtle)" }}
        />

        <div className="container relative z-10 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 animate-fade-in theme-badge">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                FSSAI Certified · Kachi Ghani · Made in India
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-4 sm:mb-5 animate-slide-up">
                Pure{" "}
                <span className="text-gradient">Cold-Pressed</span>{" "}
                Mustard Oil
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 animate-slide-up delay-100"
                style={{ color: "var(--text-secondary)" }}
              >
                Direct from our mill in{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Sanganer, Rajasthan
                </strong>
                . Traditional extraction, zero compromises, unbeatable purity.
              </p>
              <ul className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 mb-6 sm:mb-8 animate-slide-up delay-200 text-left">
                {PROMISES.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 theme-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col xs:flex-row gap-2.5 animate-slide-up delay-300 justify-center lg:justify-start">
                <Link href="/products" className="w-full xs:w-auto">
                  <button className="theme-btn-primary w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm sm:text-base font-bold shadow-lg">
                    Shop Products <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <a href={`tel:${SITE.phone}`} className="w-full xs:w-auto">
                  <button className="theme-btn-outline w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm sm:text-base font-bold">
                    <Phone className="w-4 h-4" /> {SITE.phone}
                  </button>
                </a>
              </div>
            </div>

            {/* Right — decorative (desktop only) */}
            <div className="hidden lg:flex items-center justify-center animate-scale-in delay-200">
              <div className="relative w-72 h-72 xl:w-80 xl:h-80">
                <div className="absolute inset-0 rounded-full border-2 theme-accent-border opacity-30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-6 rounded-full border theme-accent-border opacity-20 animate-[spin_15s_linear_infinite_reverse]" />
                <div
                  className="absolute inset-12 rounded-full flex items-center justify-center theme-accent-subtle border-2 theme-accent-border shadow-2xl"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  <div className="text-center">
                    <Droplets className="w-14 h-14 theme-accent mx-auto mb-1" />
                    <div className="text-xs font-bold theme-text-muted uppercase tracking-widest">
                      Pure Oil
                    </div>
                  </div>
                </div>
                {[
                  { label: "100% Pure", deg: 0   },
                  { label: "Cold Press", deg: 120 },
                  { label: "FSSAI ✓",   deg: 240 },
                ].map(({ label, deg }) => {
                  const rad = ((deg - 90) * Math.PI) / 180;
                  const r = 140;
                  const cx = 144;
                  const x = cx + r * Math.cos(rad);
                  const y = cx + r * Math.sin(rad);
                  return (
                    <div
                      key={label}
                      className="absolute theme-badge text-xs font-bold whitespace-nowrap"
                      style={{
                        left: x,
                        top: y,
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-8 sm:mt-10 animate-slide-up delay-400">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="theme-card p-3 sm:p-4 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 theme-accent" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-gradient leading-none">
                    {value}
                  </div>
                  <div className="text-xs theme-text-muted mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="text-center mb-8 sm:mb-10">
            <span className="theme-badge inline-flex mb-3">Why RSA Agro?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold theme-text mb-3">
              Quality You Can Taste
            </h2>
            <p className="theme-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Traditional cold-press methods with modern quality controls — mustard oil
              that is pure, potent, and nutritious.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`theme-card p-4 sm:p-5 animate-slide-up delay-${(i + 1) * 100}`}
              >
                <div className="w-10 h-10 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 theme-accent" />
                </div>
                <h3 className="font-bold text-sm sm:text-base theme-text mb-1.5">{title}</h3>
                <p className="theme-text-secondary text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OIL PRODUCTS ─────────────────────────────────────── */}
      <section className="section-pad">
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {oilProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OIL CAKE PRODUCTS ────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {oilcakeProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/products">
              <button className="theme-btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm sm:text-base">
                View All Products <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BULK CTA ─────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-10 md:p-14 theme-card">
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, var(--accent-subtle), transparent 60%)",
              }}
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
              <div className="text-center lg:text-left">
                <span className="theme-badge inline-flex mb-4">Bulk & Wholesale</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold theme-text mb-3">
                  Need Large Quantity Supply?
                </h2>
                <p className="theme-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                  Special pricing for distributors, traders, restaurants & food processors.
                  Min. 200L bulk orders. Direct from mill — no middlemen.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={`tel:${SITE.phone}`}>
                  <button className="theme-btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-bold shadow-lg">
                    <Phone className="w-4 h-4" /> Call: {SITE.phone}
                  </button>
                </a>
                <Link href="/contact">
                  <button className="theme-btn-outline w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base">
                    Send Enquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <p className="text-center text-xs theme-text-muted">
                  Usually responds within a few hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="text-center mb-6 sm:mb-8">
            <span className="theme-badge inline-flex mb-3">Stay Connected</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold theme-text mb-3">
              Follow Us on Social Media
            </h2>
            <p className="theme-text-secondary text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Get updates, tips, and behind-the-scenes from our mill. Latest offers,
              recipes & more!
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <SocialLinks variant="full" className="grid-cols-1 sm:grid-cols-2" />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-card text-xs sm:text-sm theme-text-secondary">
              <Star className="w-3.5 h-3.5 theme-accent" />
              Share with{" "}
              <strong className="theme-text mx-1">#RSAAgroIndustries</strong> and tag us!
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
