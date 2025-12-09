"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { ProductCardProps } from "@/lib/types";
import productImg from "@/public/images/product.svg";

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist = false,
}) => {
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
    <div className="group relative rounded-[18.35px] overflow-hidden bg-[#F2F0EF] w-full h-[521px]">
      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative w-[275px] h-[275px] mx-auto mt-[10px] rounded-[18.35px] overflow-hidden">
          <Image
            src={productImg}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="px-2 py-1 text-xs font-semibold bg-primary-500 text-white rounded">
                NEW
              </span>
            )}
            {product.originalPrice && (
              <span className="px-2 py-1 text-xs font-semibold bg-error text-white rounded">
                SALE
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="px-[11px] pt-[14px] flex flex-col gap-1">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <h3 className="text-[32px] leading-[38.4px] font-semibold text-[#333333] uppercase">
            ${product.price.toFixed(2)}
          </h3>
          {product.originalPrice && (
            <h3 className="text-[32px] leading-[38.4px] font-semibold text-[#333333] uppercase line-through">
              ${product.originalPrice.toFixed(2)}
            </h3>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[24px] leading-[28px] font-normal text-[#4A4A4A] uppercase line-clamp-2 h-[58px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-end gap-1 mb-[14px]">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.25L14.76 8.76L21.75 9.51L16.605 14.16L18.135 21L12 17.625L5.865 21L7.395 14.16L2.25 9.51L9.24 8.76L12 2.25Z"
                  fill={
                    index < Math.floor(product.rating)
                      ? "#FFDB43"
                      : "transparent"
                  }
                  stroke="#FFDB43"
                  strokeWidth="1.5"
                />
              </svg>
            ))}
          </div>
          <span className="text-[18px] leading-[21.6px] font-normal text-[#606060]">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between gap-[18px] w-full">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex items-center justify-center bg-[#333333] hover:bg-[#444444] text-white rounded-[10px] flex-1 h-[55px] text-[24px] leading-[28.8px] font-normal disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {product.inStock ? "Add to cart" : "Out of Stock"}
          </button>

          <button
            onClick={handleWishlistClick}
            className="flex items-center justify-center w-[61.16px] h-[55px] border border-[#333333] rounded-[10px] hover:bg-gray-50 transition-colors"
          >
            <Heart
              className={`w-7 h-7 ${
                isWishlisted
                  ? "fill-primary-500 stroke-primary-500"
                  : "stroke-[#EC0E0E]"
              }`}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
