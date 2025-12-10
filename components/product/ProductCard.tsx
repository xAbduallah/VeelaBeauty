"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { ProductCardProps } from "@/lib/types";
import productImg from "@/public/images/product.svg";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onToggleWishlist, isInWishlist = false }) => {
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (onToggleWishlist) {
      onToggleWishlist(product.id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="group relative rounded-xl overflow-hidden bg-[#F2F0EF] w-full pb-3 md:pb-4 lg:pb-5">
      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative w-full mx-auto mt-[10px] overflow-hidden aspect-4/4">
          <Image
            src={productImg}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 px-3 rounded-xl"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && <span className="px-2 py-1 text-xs font-semibold bg-primary-500 text-white rounded">NEW</span>}
            {product.originalPrice && <span className="px-2 py-1 text-xs font-semibold bg-error text-white rounded">SALE</span>}
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="px-2 md:px-2.5 lg:px-[11px] pt-1.5 md:pt-2 flex flex-col gap-0.5 md:gap-1">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#333333] uppercase">${product.price.toFixed(2)}</h3>
          {product.originalPrice && (
            <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#333333]/50 uppercase line-through">
              ${product.originalPrice.toFixed(2)}
            </h3>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-normal text-[#4A4A4A] capitalize line-clamp-2 h-[45px]">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-end gap-1 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-3 md:w-3.5 lg:w-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2.25L14.76 8.76L21.75 9.51L16.605 14.16L18.135 21L12 17.625L5.865 21L7.395 14.16L2.25 9.51L9.24 8.76L12 2.25Z"
                  fill={index < Math.floor(product.rating) ? "#FFDB43" : "transparent"}
                  stroke="#FFDB43"
                  strokeWidth="1.5"
                />
              </svg>
            ))}
          </div>
          <span className="text-[14px] md:text-[16px] lg:text-[18px] leading-[21.6px] font-normal text-[#606060]">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between w-full gap-1">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex w-3/4 items-center justify-center bg-[#333333] hover:bg-[#444444] text-white rounded-lg py-1 md:py-1.5 text-[14px] md:text-[16px] lg:text-[20px] font-normal disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>

          <button
            onClick={handleWishlistClick}
            className="flex items-center w-[20%] md:py-1.5 justify-center border border-[#333333] rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Heart className={`w-4 md:w-5 lg:w-6 ${isWishlisted ? "fill-primary-500 stroke-primary-500" : "stroke-[#EC0E0E]"}`} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
