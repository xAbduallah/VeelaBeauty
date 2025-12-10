"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { CategoryFilter, ProductsSection, FilterSectionData, PriceRangeValue } from "@/components/category";
import { Product } from "@/lib/types";
import productImg from "@/public/images/product.svg";
import { ChevronRight } from "lucide-react";

// Sample filter data - replace with actual data from API
const defaultFilterSections: FilterSectionData[] = [
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

// Sample products - replace with actual data from API
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Hydrating Serum with Hyaluronic Acid",
    slug: "hydrating-serum-hyaluronic",
    description: "Intensive hydration serum",
    price: 45.99,
    originalPrice: 59.99,
    images: ["/products/serum1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Vitamin C Brightening Cream",
    slug: "vitamin-c-cream",
    description: "Brightening face cream",
    price: 38.99,
    images: ["/products/cream1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "3",
    name: "Retinol Night Treatment",
    slug: "retinol-night-treatment",
    description: "Anti-aging night treatment",
    price: 52.99,
    originalPrice: 65.0,
    images: ["/products/treatment1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "4",
    name: "Gentle Cleansing Foam",
    slug: "gentle-cleansing-foam",
    description: "Daily gentle cleanser",
    price: 24.99,
    images: ["/products/cleanser1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: "5",
    name: "Nourishing Eye Cream",
    slug: "nourishing-eye-cream",
    description: "Anti-wrinkle eye cream",
    price: 42.99,
    images: ["/products/eyecream1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.7,
    reviewCount: 78,
    inStock: true,
    isNew: true,
  },
  {
    id: "6",
    name: "Hydrating Face Mask Set",
    slug: "hydrating-mask-set",
    description: "Set of 5 hydrating masks",
    price: 29.99,
    originalPrice: 39.99,
    images: ["/products/mask1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.4,
    reviewCount: 245,
    inStock: true,
  },
  {
    id: "7",
    name: "Hydrating Serum with Hyaluronic Acid",
    slug: "hydrating-serum-hyaluronic",
    description: "Intensive hydration serum",
    price: 45.99,
    originalPrice: 59.99,
    images: ["/products/serum1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    isNew: true,
  },
  {
    id: "8",
    name: "Vitamin C Brightening Cream",
    slug: "vitamin-c-cream",
    description: "Brightening face cream",
    price: 38.99,
    images: ["/products/cream1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "9",
    name: "Retinol Night Treatment",
    slug: "retinol-night-treatment",
    description: "Anti-aging night treatment",
    price: 52.99,
    originalPrice: 65.0,
    images: ["/products/treatment1.jpg"],
    category: "skincare",
    brand: "Veela Beauty",
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    isBestseller: true,
  },
];

const CategoriesContent: React.FC = () => {
  const search = useSearchParams();
  const { id } = useParams<{ id: string }>();

  const type = search.get("type");
  const subcategory = search.get("subcategory");

  const [priceRange, setPriceRange] = useState<PriceRangeValue>({
    min: 0,
    max: 1000,
  });
  const [filterSections, setFilterSections] = useState<FilterSectionData[]>(defaultFilterSections);

  const categoryTitle = id ? id.replace(/-/g, " ") : "All Products";

  const handlePriceChange = (range: PriceRangeValue) => {
    setPriceRange(range);
  };

  const handleFilterChange = (sectionId: string, itemId: string, checked: boolean) => {
    setFilterSections((prev) =>
      prev.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map((item) => (item.id === itemId ? { ...item, checked } : item)),
          };
        }
        return section;
      })
    );
  };

  const [sortedProducts, setSortedProducts] = useState(sampleProducts);

  const handleSortChange = (sortId: string) => {
    let sorted = [...sampleProducts];
    switch (sortId) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        sorted = sampleProducts;
    }
    setSortedProducts(sorted);
  };

  const handleAddToCart = (product: Product) => {
    alert(`Added ${product.name} to cart`);
  };

  const handleToggleWishlist = (productId: string) => {
    console.log("Toggle wishlist:", productId);
  };

  // Sample category tags
  const categoryTags = [
    "Blusher",
    "Concealer",
    "Foundation",
    "Face powder",
    "Eyebrows",
    "Lipsticks",
    "Rouge",
    "Face primer",
    "Mascara",
    "Highlighter",
  ];

  return (
    <section className="main-section">
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Breadcrumb Navigation */}
        <div className="flex items-end gap-2 self-start">
          <span className="text-[18px] leading-[21.6px] font-normal text-[#4A4A4A]">Home</span>
          <ChevronRight />
          <span className="text-[18px] leading-[21.6px] font-normal text-[#4A4A4A]">Makeup</span>
          <ChevronRight />
          <span className="text-[18px] leading-[21.6px] font-normal text-[#4A4A4A]">Face</span>
        </div>

        {/* Category Description Section */}
        <div className="flex items-start justify-start gap-[118px] w-full">
          {/* Description Content */}
          <div className="flex flex-col gap-6 w-[518px]">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-[52px] leading-[62.4px] font-normal text-black w-full">Makeup</h1>
              <p className="text-[14px] leading-[16.8px] font-normal text-black uppercase w-full h-[68px] line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 w-full">
              {categoryTags.map((tag) => (
                <button
                  key={tag}
                  className="flex items-center justify-center px-[14px] py-[6px] bg-white hover:bg-gray-50 shadow-sm rounded-[5px] text-[20px] leading-[24px] font-normal text-[#333333] uppercase transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Background Image */}
          <div className="relative w-[612px] h-[300px] rounded-[15px] overflow-hidden">
            <Image src={productImg} alt="Category background" fill className="object-cover" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex items-start gap-[100px] w-full">
          <CategoryFilter
            categoryTitle={categoryTitle}
            subcategoryTitle={subcategory || undefined}
            typeTitle={type || undefined}
            filterSections={filterSections}
            priceRange={priceRange}
            onPriceChange={handlePriceChange}
            onFilterChange={handleFilterChange}
          />

          <ProductsSection
            title={categoryTitle}
            products={sortedProducts}
            totalCount={sortedProducts.length}
            onSortChange={handleSortChange}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        </div>
      </div>
    </section>
  );
};

const Categories: React.FC = () => {
  return (
    <Suspense fallback={<div className="main-section flex items-center justify-center min-h-[400px]">Loading...</div>}>
      <CategoriesContent />
    </Suspense>
  );
};

export default Categories;
