"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { CategoryFilter, FilterSectionData, PriceRangeValue, ProductsSection } from "@/components/category";
import { Product } from "@/lib/types";
import productImg from "@/public/images/Makeup.svg";
import productImgMd from "@/public/images/Makeup-md.svg";
import productImgSm from "@/public/images/Makeup-sm.svg";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { defaultFilterSections } from "@/lib/constants";

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

  const navValues = [id, type, subcategory].filter((v) => v && v.trim() !== "").map((v) => v?.replace(/-/g, " "));

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
    // setFilterSections((prev) =>
    //   prev.map((section) => {
    //     if (section.id === sectionId) {
    //       return {
    //         ...section,
    //         items: section.items.map((item) => (item.id === itemId ? { ...item, checked } : item)),
    //       };
    //     }
    //     return section;
    //   })
    // );
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
    <section className="w-full bg-[radial-gradient(circle_at_top_left,#ec4899_0%,rgba(236,72,153,0.35)_0%,transparent_20%)] shadow-[inset_0_40px_20px_-10px_rgba(0,0,0,0.18)]">
      <div className="main-section flex flex-col items-center">
        {/* Breadcrumb Navigation */}
        <div className="flex items-end gap-1 self-start">
          <span className="text-heading mb-0 capitalize text-black">Category</span>

          {navValues.map((value, index) => (
            <div key={index} className="flex items-center gap-1">
              <ChevronRight className="text-primary-400 w-5 h-5" />
              <span className="nav-text font-normal capitalize">{value}</span>
            </div>
          ))}
        </div>

        {/* Category Description Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
          {/* Description Content */}
          <div className="flex flex-col gap-6 md:w-[328px] lg:w-[518px]">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-[52px] font-normal text-black w-full">Makeup</h1>
              <p className="text-[14px] font-normal text-black uppercase w-full h-[68px] line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 w-full">
              {categoryTags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  fullWidth={false}
                  className="flex items-center justify-center px-[14px] shadow-md uppercase transition-all border-none"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Background Image */}
          <div className="relative w-[434px] h-[200px] md:w-[328px] md:h-[271px] lg:w-[612px] lg:h-[300px] rounded-[15px] overflow-hidden">
            <Image src={productImgSm} alt="Category background" fill className="object-contain md:hidden" />
            <Image src={productImgMd} alt="Category background" fill className="object-contain hidden md:block lg:hidden" />
            <Image src={productImg} alt="Category background" fill className="object-contain hidden lg:block" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="hidden md:flex items-start md:gap-[27px] lg:gap-[100px] w-full mt-8">
          <div className="hidden md:block">
            <CategoryFilter
              categoryTitle={categoryTitle}
              subcategoryTitle={subcategory || undefined}
              typeTitle={type || undefined}
              filterSections={filterSections}
              priceRange={priceRange}
              onPriceChange={handlePriceChange}
              onFilterChange={handleFilterChange}
            />
          </div>

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
