import type { NavigationItem, Banner, FilterSectionData } from "./types";
import banner1 from "@/public/images/home/banner-1.jpg";
import banner2 from "@/public/images/home/banner-2.jpg";
import banner3 from "@/public/images/home/banner-3.jpg";
import banner4 from "@/public/images/home/banner-4.jpg";

// Hero Banners
export const heroBanners: Banner[] = [
  {
    id: "1",
    title: "Summer Glow Collection",
    subtitle: "New Arrival",
    description: "Discover our latest sun-kissed makeup collection for the perfect summer look",
    image: banner1,
    buttonText: "Shop Now",
    buttonLink: "/category/new-arrivals",
    textColor: "#1F2937",
  },
  {
    id: "2",
    title: "Luxury Skincare Sale",
    subtitle: "Up to 40% Off",
    description: "Premium skincare products at unbeatable prices. Limited time offer!",
    image: banner2,
    buttonText: "Shop Sale",
    buttonLink: "/category/offers",
    textColor: "#1F2937",
  },
  {
    id: "3",
    title: "Signature Fragrances",
    subtitle: "Exclusive Collection",
    description: "Find your perfect scent from our curated selection of designer perfumes",
    image: banner3,
    buttonText: "Explore Now",
    buttonLink: "/category/perfumes",
    textColor: "#1F2937",
  },
  {
    id: "4",
    title: "Hair Care Essentials",
    subtitle: "Professional Grade",
    description: "Transform your hair with salon-quality products for every hair type",
    image: banner4,
    buttonText: "Discover More",
    buttonLink: "/category/haircare",
    textColor: "#1F2937",
  },
];

// Navigation Menu Items
export const navigationItems: NavigationItem[] = [
  {
    label: "Brands",
    href: "/brands",
  },
  {
    label: "Makeup",
    href: "/category/makeup",
    sections: [
      {
        name: "Face",
        items: [
          {
            label: "BB & CC Creams",
            href: "/category/makeup?subcategory=face&type=bb-cc-creams",
          },
          {
            label: "Blushers",
            href: "/category/makeup?subcategory=face&type=blushers",
          },
          {
            label: "Bronzer",
            href: "/category/makeup?subcategory=face&type=bronzer",
          },
          {
            label: "Concealer & Correctors",
            href: "/category/makeup?subcategory=face&type=concealer-correctors",
          },
          {
            label: "Face Powder",
            href: "/category/makeup?subcategory=face&type=face-powder",
          },
          {
            label: "Face Primer",
            href: "/category/makeup?subcategory=face&type=face-primer",
          },
          {
            label: "Foundation",
            href: "/category/makeup?subcategory=face&type=foundation",
          },
        ],
      },
      {
        name: "Lips",
        items: [
          {
            label: "Lip Gloss",
            href: "/category/makeup?subcategory=lips&type=lip-gloss",
          },
          {
            label: "Lip Liner",
            href: "/category/makeup?subcategory=lips&type=lip-liner",
          },
          {
            label: "Lipstick",
            href: "/category/makeup?subcategory=lips&type=lipstick",
          },
        ],
      },
      {
        name: "Eyes",
        items: [
          {
            label: "Eyebrows",
            href: "/category/makeup?subcategory=eyes&type=eyebrows",
          },
          {
            label: "Eyeliner & Kohl Pencils",
            href: "/category/makeup?subcategory=eyes&type=eyeliner-kohl",
          },
          {
            label: "Eyeshadow & Palettes",
            href: "/category/makeup?subcategory=eyes&type=eyeshadow-palettes",
          },
        ],
      },
    ],
  },
  {
    label: "Skincare",
    href: "/category/skincare",
    sections: [
      {
        name: "Cleansing",
        items: [
          {
            label: "Face Wash",
            href: "/category/skincare?subcategory=cleansing&type=face-wash",
          },
          {
            label: "Cleansing Gel",
            href: "/category/skincare?subcategory=cleansing&type=cleansing-gel",
          },
          {
            label: "Micellar Water",
            href: "/category/skincare?subcategory=cleansing&type=micellar-water",
          },
          {
            label: "Makeup Remover",
            href: "/category/skincare?subcategory=cleansing&type=makeup-remover",
          },
          {
            label: "Cleansing Oil",
            href: "/category/skincare?subcategory=cleansing&type=cleansing-oil",
          },
        ],
      },
      {
        name: "Treatment",
        items: [
          {
            label: "Serums",
            href: "/category/skincare?subcategory=treatment&type=serums",
          },
          {
            label: "Acne Treatment",
            href: "/category/skincare?subcategory=treatment&type=acne-treatment",
          },
          {
            label: "Anti-Aging",
            href: "/category/skincare?subcategory=treatment&type=anti-aging",
          },
          {
            label: "Face Masks",
            href: "/category/skincare?subcategory=treatment&type=face-masks",
          },
          {
            label: "Toners",
            href: "/category/skincare?subcategory=treatment&type=toners",
          },
        ],
      },
      {
        name: "Moisturizers",
        items: [
          {
            label: "Day Creams",
            href: "/category/skincare?subcategory=moisturizers&type=day-creams",
          },
          {
            label: "Night Creams",
            href: "/category/skincare?subcategory=moisturizers&type=night-creams",
          },
          {
            label: "Eye Creams",
            href: "/category/skincare?subcategory=moisturizers&type=eye-creams",
          },
          {
            label: "Face Oils",
            href: "/category/skincare?subcategory=moisturizers&type=face-oils",
          },
          {
            label: "SPF Moisturizers",
            href: "/category/skincare?subcategory=moisturizers&type=spf-moisturizers",
          },
        ],
      },
    ],
  },
  {
    label: "Haircare",
    href: "/category/haircare",
    sections: [
      {
        name: "Cleaning",
        items: [
          {
            label: "Shampoo",
            href: "/category/haircare?subcategory=cleaning&type=shampoo",
          },
          {
            label: "Dry Shampoo",
            href: "/category/haircare?subcategory=cleaning&type=dry-shampoo",
          },
          {
            label: "Clarifying Shampoo",
            href: "/category/haircare?subcategory=cleaning&type=clarifying-shampoo",
          },
        ],
      },
      {
        name: "Conditioning",
        items: [
          {
            label: "Conditioner",
            href: "/category/haircare?subcategory=conditioning&type=conditioner",
          },
          {
            label: "Hair Masks",
            href: "/category/haircare?subcategory=conditioning&type=hair-masks",
          },
          {
            label: "Leave-in Conditioner",
            href: "/category/haircare?subcategory=conditioning&type=leave-in-conditioner",
          },
          {
            label: "Deep Treatments",
            href: "/category/haircare?subcategory=conditioning&type=deep-treatments",
          },
        ],
      },
      {
        name: "Styling",
        items: [
          {
            label: "Hair Oils",
            href: "/category/haircare?subcategory=styling&type=hair-oils",
          },
          {
            label: "Heat Protection",
            href: "/category/haircare?subcategory=styling&type=heat-protection",
          },
          {
            label: "Hair Serums",
            href: "/category/haircare?subcategory=styling&type=hair-serums",
          },
          {
            label: "Hair Spray",
            href: "/category/haircare?subcategory=styling&type=hair-spray",
          },
          {
            label: "Styling Gel",
            href: "/category/haircare?subcategory=styling&type=styling-gel",
          },
        ],
      },
    ],
  },
  {
    label: "Bath & Body",
    href: "/category/bath-body",
    sections: [
      {
        name: "Bath",
        items: [
          {
            label: "Shower Gel",
            href: "/category/bath-body?subcategory=bath&type=shower-gel",
          },
          {
            label: "Body Scrub",
            href: "/category/bath-body?subcategory=bath&type=body-scrub",
          },
          {
            label: "Bath Salts",
            href: "/category/bath-body?subcategory=bath&type=bath-salts",
          },
          {
            label: "Soap Bars",
            href: "/category/bath-body?subcategory=bath&type=soap-bars",
          },
          {
            label: "Bath Bombs",
            href: "/category/bath-body?subcategory=bath&type=bath-bombs",
          },
        ],
      },
      {
        name: "Body Care",
        items: [
          {
            label: "Body Lotion",
            href: "/category/bath-body?subcategory=body-care&type=body-lotion",
          },
          {
            label: "Body Butter",
            href: "/category/bath-body?subcategory=body-care&type=body-butter",
          },
          {
            label: "Hand Cream",
            href: "/category/bath-body?subcategory=body-care&type=hand-cream",
          },
          {
            label: "Body Oil",
            href: "/category/bath-body?subcategory=body-care&type=body-oil",
          },
          {
            label: "Foot Cream",
            href: "/category/bath-body?subcategory=body-care&type=foot-cream",
          },
        ],
      },
      {
        name: "Sun Care",
        items: [
          {
            label: "Sunscreen",
            href: "/category/bath-body?subcategory=sun-care&type=sunscreen",
          },
          {
            label: "After Sun",
            href: "/category/bath-body?subcategory=sun-care&type=after-sun",
          },
          {
            label: "Self Tanner",
            href: "/category/bath-body?subcategory=sun-care&type=self-tanner",
          },
        ],
      },
    ],
  },
  {
    label: "Perfumes",
    href: "/category/perfumes",
    sections: [
      {
        name: "Women",
        items: [
          {
            label: "Eau de Parfum",
            href: "/category/perfumes?subcategory=women&type=eau-de-parfum",
          },
          {
            label: "Eau de Toilette",
            href: "/category/perfumes?subcategory=women&type=eau-de-toilette",
          },
          {
            label: "Body Mist",
            href: "/category/perfumes?subcategory=women&type=body-mist",
          },
          {
            label: "Perfume Sets",
            href: "/category/perfumes?subcategory=women&type=perfume-sets",
          },
        ],
      },
      {
        name: "Men",
        items: [
          {
            label: "Eau de Parfum",
            href: "/category/perfumes?subcategory=men&type=eau-de-parfum",
          },
          {
            label: "Eau de Toilette",
            href: "/category/perfumes?subcategory=men&type=eau-de-toilette",
          },
          {
            label: "Cologne",
            href: "/category/perfumes?subcategory=men&type=cologne",
          },
          {
            label: "Aftershave",
            href: "/category/perfumes?subcategory=men&type=aftershave",
          },
        ],
      },
      {
        name: "Unisex",
        items: [
          {
            label: "Luxury Fragrances",
            href: "/category/perfumes?subcategory=unisex&type=luxury",
          },
          {
            label: "Designer Fragrances",
            href: "/category/perfumes?subcategory=unisex&type=designer",
          },
          {
            label: "Niche Fragrances",
            href: "/category/perfumes?subcategory=unisex&type=niche",
          },
        ],
      },
    ],
  },
  {
    label: "New Arrivals",
    href: "/category/new-arrivals",
    sections: [
      {
        name: "Latest in Makeup",
        items: [
          {
            label: "New Lip Products",
            href: "/category/new-arrivals?subcategory=makeup&type=lips",
          },
          {
            label: "New Face Products",
            href: "/category/new-arrivals?subcategory=makeup&type=face",
          },
          {
            label: "New Eye Products",
            href: "/category/new-arrivals?subcategory=makeup&type=eyes",
          },
          {
            label: "New Makeup Tools",
            href: "/category/new-arrivals?subcategory=makeup&type=tools",
          },
        ],
      },
      {
        name: "Latest in Skincare",
        items: [
          {
            label: "New Cleansers",
            href: "/category/new-arrivals?subcategory=skincare&type=cleansers",
          },
          {
            label: "New Serums",
            href: "/category/new-arrivals?subcategory=skincare&type=serums",
          },
          {
            label: "New Moisturizers",
            href: "/category/new-arrivals?subcategory=skincare&type=moisturizers",
          },
          {
            label: "New Treatments",
            href: "/category/new-arrivals?subcategory=skincare&type=treatments",
          },
        ],
      },
      {
        name: "Latest in Haircare",
        items: [
          {
            label: "New Shampoos",
            href: "/category/new-arrivals?subcategory=haircare&type=shampoos",
          },
          {
            label: "New Treatments",
            href: "/category/new-arrivals?subcategory=haircare&type=treatments",
          },
          {
            label: "New Styling Products",
            href: "/category/new-arrivals?subcategory=haircare&type=styling",
          },
          {
            label: "New Hair Tools",
            href: "/category/new-arrivals?subcategory=haircare&type=tools",
          },
        ],
      },
    ],
  },
  {
    label: "Sale & Offers",
    href: "/category/offers",
    sections: [
      {
        name: "Makeup Deals",
        items: [
          {
            label: "Face Offers",
            href: "/category/offers?subcategory=makeup&type=face",
          },
          {
            label: "Lips Offers",
            href: "/category/offers?subcategory=makeup&type=lips",
          },
          {
            label: "Eyes Offers",
            href: "/category/offers?subcategory=makeup&type=eyes",
          },
          {
            label: "Makeup Sets",
            href: "/category/offers?subcategory=makeup&type=sets",
          },
        ],
      },
      {
        name: "Skincare Deals",
        items: [
          {
            label: "Cleanser Discounts",
            href: "/category/offers?subcategory=skincare&type=cleansers",
          },
          {
            label: "Serum Discounts",
            href: "/category/offers?subcategory=skincare&type=serums",
          },
          {
            label: "Moisturizer Discounts",
            href: "/category/offers?subcategory=skincare&type=moisturizers",
          },
          {
            label: "Skincare Sets",
            href: "/category/offers?subcategory=skincare&type=sets",
          },
        ],
      },
      {
        name: "Haircare Deals",
        items: [
          {
            label: "Shampoo Offers",
            href: "/category/offers?subcategory=haircare&type=shampoos",
          },
          {
            label: "Conditioner Offers",
            href: "/category/offers?subcategory=haircare&type=conditioners",
          },
          {
            label: "Styling Product Offers",
            href: "/category/offers?subcategory=haircare&type=styling",
          },
          {
            label: "Haircare Sets",
            href: "/category/offers?subcategory=haircare&type=sets",
          },
        ],
      },
    ],
  },
];

// Sample filter data - replace with actual data from API
export const defaultFilterSections: FilterSectionData[] = [
  {
    id: "category",
    title: "Category",
    items: [
      { id: "skincare", label: "Skincare", count: 45 },
      { id: "makeup", label: "Makeup", count: 32 },
      { id: "haircare", label: "Haircare", count: 28 },
      { id: "bodycare", label: "Body Care", count: 19 },
      { id: "fragrance", label: "Fragrance", count: 15 },
    ],
  },
  {
    id: "skintype",
    title: "Skintype (for skin)",
    items: [
      { id: "normal", label: "Normal", count: 38 },
      { id: "dry", label: "Dry", count: 25 },
      { id: "oily", label: "Oily", count: 31 },
      { id: "combination", label: "Combination", count: 22 },
      { id: "sensitive", label: "Sensitive", count: 18 },
    ],
  },
  {
    id: "applicableArea",
    title: "Applicable area",
    items: [
      { id: "face", label: "Face", count: 52 },
      { id: "eyes", label: "Eyes", count: 24 },
      { id: "lips", label: "Lips", count: 18 },
      { id: "body", label: "Body", count: 35 },
      { id: "hands", label: "Hands", count: 12 },
    ],
  },
  {
    id: "effectiveMaterial",
    title: "Effective material",
    items: [
      { id: "hyaluronic", label: "Hyaluronic Acid", count: 28 },
      { id: "retinol", label: "Retinol", count: 15 },
      { id: "vitaminc", label: "Vitamin C", count: 22 },
      { id: "niacinamide", label: "Niacinamide", count: 19 },
      { id: "peptides", label: "Peptides", count: 11 },
      { id: "ceramides", label: "Ceramides", count: 14 },
    ],
  },
  {
    id: "concerns",
    title: "Concerns",
    items: [
      { id: "aging", label: "Anti-Aging", count: 34 },
      { id: "acne", label: "Acne", count: 21 },
      { id: "hydration", label: "Hydration", count: 42 },
      { id: "brightening", label: "Brightening", count: 27 },
      { id: "pores", label: "Pores", count: 16 },
      { id: "darkspots", label: "Dark Spots", count: 13 },
    ],
  },
];
