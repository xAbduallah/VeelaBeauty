"use client";

import React, { Activity, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductsSectionProps } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";

const ProductsSection: React.FC<ProductsSectionProps> = ({
  title,
  products,
  totalCount,
  sortOptions = [
    { id: "feature", label: "Feature" },
    { id: "popular", label: "Most Popular" },
    { id: "newest", label: "Newest" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Highest Rated" },
  ],
  defaultSortId = "feature",
  onSortChange,
  onAddToCart,
  onToggleWishlist,
}) => {
  const [selectedSort, setSelectedSort] = useState(defaultSortId);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSortChange = (sortId: string) => {
    setSelectedSort(sortId);
    setIsSortOpen(false);
    if (onSortChange) {
      onSortChange(sortId);
    }
  };

  const selectedSortLabel = sortOptions.find((opt) => opt.id === selectedSort)?.label || "Feature";

  const displayCount = totalCount ?? products.length;

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 w-full">
        {/* Title and Count */}
        <div>
          <p className="text-[18px] leading-[24px] font-normal text-black">
            Showing <span className="font-semibold">{displayCount}</span> results for "{title}"
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex rtl:flex-row-reverse items-center gap-2">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 text-white" viewBox="0 0 28 28" fill="none">
              <path d="M3.5 8.17H24.5" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7 14H21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11.67 19.83H16.33" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-[18px] leading-[24px] font-normal text-[#4A4A4A]">Sort By</span>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center justify-between px-3 py-2 border border-[#777777] rounded-[5px] bg-white w-[190px]"
            >
              <span className="text-[18px] leading-[24px] font-normal text-black">{selectedSortLabel}</span>
              <ChevronDown className={`w-6 h-6 text-black transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
            </button>

            <Activity mode={isSortOpen ? "visible" : "hidden"}>
              <div className="absolute right-0 mt-2 w-[190px] bg-white border border-[#777777] rounded-[5px] shadow-lg z-10">
                {sortOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleSortChange(option.id)}
                    className={`w-full text-left px-4 py-3 text-[18px] font-normal hover:bg-gray-50 ${index === 0 ? "rounded-t-[5px]" : ""} ${
                      index === sortOptions.length - 1 ? "rounded-b-[5px]" : ""
                    } ${selectedSort === option.id ? "text-primary-500 bg-primary-50" : "text-black"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </Activity>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <svg className="w-16 h-16 text-secondary-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <h3 className="text-lg font-medium text-secondary-700 mb-1">No products found</h3>
          <p className="text-sm text-secondary-500">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
