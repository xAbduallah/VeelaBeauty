"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import StarRating from "@/components/ui/StarRating";
import PriceDisplay from "@/components/ui/PriceDisplay";
import Button from "@/components/ui/Button";

export interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
    onToggleWishlist?: (productId: string) => void;
    isInWishlist?: boolean;
}

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
        <div className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
            <Link href={`/product/${product.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-square bg-secondary-100 overflow-hidden">
                    <Image
                        src={product.images[0] || "/placeholder-product.jpg"}
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

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlistClick}
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors"
                    >
                        <svg
                            className={`w-5 h-5 ${isWishlisted ? "fill-primary-500 text-primary-500" : "text-secondary-400"}`}
                            fill={isWishlisted ? "currentColor" : "none"}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                    {/* Price */}
                    <PriceDisplay
                        price={product.price}
                        originalPrice={product.originalPrice}
                        size="md"
                        className="mb-2"
                    />

                    {/* Title */}
                    <h3 className="text-sm font-medium text-black line-clamp-2 mb-2 min-h-[40px]">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={product.rating} size="sm" />
                        <span className="text-xs text-secondary-500">
                            ({product.reviewCount})
                        </span>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? "Add to cart" : "Out of Stock"}
                    </Button>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
