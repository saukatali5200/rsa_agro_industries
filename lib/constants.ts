export const SITE = {
  name:        "RSA Agro Industries",
  owner:       "RSA Agro Industries",
  tagline:     "Manufacturer of Pure Oils & Oil Cake 🌾",
  description: "RSA Agro Industries, Sluggan — trusted manufacturer of pure oils and oil cake. FSSAI certified. Wholesale & retail supply across India.",
  url:         "https://rsaagro.com",
  phone:       "+91-9694929317",
  whatsapp:    "919694929317",
  email:       "saukatali5200@gmail.com",
  address:     "Sanganer, Rajasthan, India",
  pincode:     "321203",
  city:        "Sanganer",
  state:       "Rajasthan",
  gst:         "08AAHFU7392Q1Z3",
  fssai:       "12345678901234",
  cin:         "N/A",
  maps:        "https://maps.google.com/?q=Sanganer+Rajasthan",
} as const;

export const SOCIAL_LINKS = [
  {
    label:    "Facebook",
    href:     "https://facebook.com/saukatali5200",
    icon:     "facebook",
    color:    "#1877F2",
    handle:   "@saukatali5200",
  },
  {
    label:    "Instagram",
    href:     "https://instagram.com/saukatali5200",
    icon:     "instagram",
    color:    "#E1306C",
    handle:   "@saukatali5200",
  },
  {
    label:    "YouTube",
    href:     "https://youtube.com/@saukatali5200",
    icon:     "youtube",
    color:    "#FF0000",
    handle:   "@saukatali5200",
  },
  {
    label:    "WhatsApp",
    href:     `https://wa.me/919694929317`,
    icon:     "whatsapp",
    color:    "#25D366",
    handle:   "+91-9694929317",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home",        href: "/"           },
  { label: "About",       href: "/about"      },
  { label: "Products",    href: "/products"   },
  { label: "Price List",  href: "/price-list" },
  { label: "GST & Legal", href: "/legal"      },
  { label: "Contact",     href: "/contact"    },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home",       href: "/"           },
    { label: "Products",   href: "/products"   },
    { label: "Price List", href: "/price-list" },
    { label: "About Us",   href: "/about"      },
    { label: "Contact",    href: "/contact"    },
  ],
  legal: [
    { label: "GST & Legal Info", href: "/legal" },
  ],
};

export const STATES_OF_INDIA = [
  "Haryana","Madhya Pradesh","Maharashtra","Punjab","Rajasthan",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Delhi","Jammu and Kashmir"
];
