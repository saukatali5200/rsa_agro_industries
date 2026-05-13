"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import SocialLinks from "@/components/SocialLinks";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-navbar glass",
          scrolled && "shadow-lg"
        )}
      >
        <nav className="container mx-auto h-14 sm:h-16 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity flex-shrink-0">
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={100}
              height={40}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    pathname === link.href
                      ? "theme-accent theme-accent-subtle font-semibold"
                      : "theme-text-secondary hover:theme-text theme-btn-ghost"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="hidden xl:flex items-center mr-1">
              <SocialLinks variant="icon-only" size="sm" />
            </div>
            <ThemeSwitcher />

            {/* Cart */}
            <Link href="/cart">
              <button className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg theme-btn-ghost flex items-center justify-center transition-all">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full theme-accent-bg text-[#1a1a1a] text-[10px] sm:text-xs font-bold flex items-center justify-center animate-scale-in">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg theme-btn-ghost flex items-center justify-center transition-all"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[min(280px,85vw)] z-50 theme-elevated border-l lg:hidden",
          "transform transition-transform duration-300 ease-in-out overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b theme-divider sticky top-0 theme-elevated z-10">
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={80}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <button
            className="w-8 h-8 rounded-lg theme-btn-ghost flex items-center justify-center"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="p-3 space-y-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                pathname === link.href
                  ? "theme-accent theme-accent-subtle"
                  : "theme-text-secondary hover:theme-text theme-btn-ghost"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-3 pt-2 pb-6 border-t theme-divider mx-3 mt-2">
          <Link href="/cart" className="block mt-3">
            <button className="w-full py-2.5 px-4 rounded-xl theme-btn-primary flex items-center justify-center gap-2 font-semibold text-sm">
              <ShoppingCart className="w-4 h-4" />
              View Cart
              {totalItems > 0 && (
                <span className="ml-1 bg-[rgba(0,0,0,0.2)] text-inherit text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
          <div className="mt-4">
            <p className="text-xs theme-text-muted uppercase tracking-widest mb-2 font-semibold">
              Follow Us
            </p>
            <SocialLinks variant="icon-label" size="sm" />
          </div>
        </div>
      </div>
    </>
  );
}
