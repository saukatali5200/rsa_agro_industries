# 🌻 Saukat Mill Oil — E-Commerce Website

A production-ready public e-commerce website for **Saukat Mill Oil**, a mustard oil manufacturing and oil cake supply business in India.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components.

---

## 🗂️ Project Structure

```
saukat-mill-oil/
├── public/                          # Static assets
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout (Navbar + Footer + Providers)
│   │   ├── globals.css              # Global Tailwind CSS
│   │   ├── page.tsx                 # Home page (/)
│   │   ├── about/page.tsx           # About page (/about)
│   │   ├── products/page.tsx        # Products page (/products)
│   │   ├── price-list/page.tsx      # Price list (/price-list)
│   │   ├── legal/page.tsx           # GST & Legal (/legal)
│   │   ├── contact/page.tsx         # Contact (/contact)
│   │   ├── cart/page.tsx            # Cart (/cart)
│   │   └── checkout/page.tsx        # Checkout (/checkout)
│   ├── components/
│   │   ├── ui/                      # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── label.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── select.tsx
│   │   │   └── separator.tsx
│   │   ├── Navbar.tsx               # Sticky navbar + mobile drawer
│   │   ├── Footer.tsx               # Site footer
│   │   ├── WhatsAppButton.tsx       # Floating WhatsApp CTA
│   │   ├── ProductCard.tsx          # Product card with add-to-cart
│   │   └── SectionHeader.tsx        # Reusable section headings
│   ├── context/
│   │   └── CartContext.tsx          # React Context + localStorage cart
│   ├── lib/
│   │   ├── utils.ts                 # cn(), formatINR(), GST helpers
│   │   ├── products.ts              # Product catalog data
│   │   └── constants.ts             # Site config, nav links, states
│   └── types/
│       └── index.ts                 # TypeScript type definitions
├── tailwind.config.ts               # Tailwind + mustard yellow theme
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## ⚡ Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 shadcn/ui Setup

This project uses **hand-crafted shadcn/ui-compatible components** in `src/components/ui/` — they are already included and styled for the dark mustard theme. No additional shadcn CLI setup is needed.

If you want to add more shadcn components in the future:

```bash
# First initialise shadcn (if not done)
npx shadcn-ui@latest init

# Add specific components
npx shadcn-ui@latest add table
npx shadcn-ui@latest add toast
```

---

## ⚙️ Configuration

Edit **`src/lib/constants.ts`** to update your business information:

```ts
export const SITE = {
  name: "Saukat Mill Oil",
  phone: "+91-XXXXXXXXXX",        // ← Your real phone number
  whatsapp: "91XXXXXXXXXX",       // ← WhatsApp: country code + number (no +)
  email: "info@saukatmill.com",   // ← Your real email
  address: "Your full address",    // ← Your mill address
  gst: "YOUR_GSTIN",              // ← Your GSTIN
  fssai: "YOUR_FSSAI_LICENCE",    // ← Your FSSAI licence number
  url: "https://yourdomain.com",  // ← Your deployed domain
};
```

Edit **`src/lib/products.ts`** to update prices, packaging, and product details.

---

## 🚀 Deploying to Vercel

### Option A — GitHub + Vercel (recommended)

1. Push this project to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live 🎉

### Option B — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts, then deploy to production
vercel --prod
```

### Environment Variables

No environment variables are required for the base setup. If you add email/payment integrations later, add them in the Vercel dashboard under **Settings → Environment Variables**.

---

## 🛒 Cart Functionality

- Cart state managed via **React Context API** (`CartContext.tsx`)
- Cart persisted in **`localStorage`** — survives page refresh
- Cart count badge in the **navbar** updates in real time
- `addItem`, `removeItem`, `updateQuantity`, `clearCart` actions available via `useCart()` hook

```tsx
// Usage example
import { useCart } from "@/context/CartContext";

const { addItem, totalItems } = useCart();
addItem(product, 2); // Add 2 units of a product
```

---

## 🔧 Adding Real Backend / Payments

The checkout form is currently **UI-only** (no real payment processing). To add real functionality:

### Contact form
Replace the simulated `setTimeout` in `contact/page.tsx` with a real API call:
- **Resend** or **Nodemailer** for email
- **Formspree** / **Web3Forms** for simple form handling

### Payment gateway
- **Razorpay** (most popular in India) — add their checkout SDK
- **PayU / CCAvenue** — enterprise options
- **PhonePe / Cashfree** — UPI-first options

### Order management
- Add a **MongoDB / Supabase / Firebase** backend
- Create API routes in `src/app/api/` (Next.js App Router)

---

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, product preview, bulk CTA |
| About | `/about` | Company story, values, certifications |
| Products | `/products` | Full product catalogue with add-to-cart |
| Price List | `/price-list` | GST-inclusive price table with HSN codes |
| GST & Legal | `/legal` | GSTIN, FSSAI, billing & privacy policy |
| Contact | `/contact` | Enquiry form + contact details |
| Cart | `/cart` | Cart items, quantity controls, totals |
| Checkout | `/checkout` | Billing form, payment UI, success dialog |

---

## 🎨 Design System

**Theme:** Dark background (`#0f0f0f`) with **mustard yellow** (`#f59e0b`) accents

**Custom Tailwind colors:**
- `mustard-500` — Primary brand colour (`#f59e0b`)
- `dark-900` — Card/surface background
- `dark-950` — Page background

**Typography:** Inter (Google Fonts, variable font)

---

## 📞 Support

For queries about this codebase, contact the developer.
For business inquiries, contact Saukat Mill Oil directly.
>>>>>>> eea1f15a8a1af463218257f864f6f2ddb02fd183
"# mewathubnext" 
"# rsa_agro_industries" 
"# rsa_agro_industries" 
"# rsa_agro_industries" 
