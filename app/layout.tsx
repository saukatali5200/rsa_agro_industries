import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/ChatBot";
import { SITE } from "@/lib/constants";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Manufacturer of Pure Oils & Oil Cake India`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "pure oils", "sarson ka tel", "cold pressed oils",
    "oil manufacturer India", "bulk oil supply",
    "oil cake cattle feed", "oil wholesaler",
    "RSA Agro Industries", "pure cold pressed oils",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | Manufacturer of Pure Oils & Oil Cake`,
    description: SITE.description,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rsa_agro_theme');if(t&&['dark','light','saffron'].includes(t)){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        style={{ background: "var(--bg-page)", color: "var(--text-primary)" }}
        className="min-h-screen flex flex-col"
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
            <ChatBot />
            <ScrollToTop />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
