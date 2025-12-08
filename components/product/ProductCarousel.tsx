"use client";

import React, { useRef } from "react";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export interface ProductCarouselProps {
    products: Product[];
    title?: string;
    onAddToCart?: (product: Product) => void;
    onToggleWishlist?: (productId: string) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
    products,
    title,
    onAddToCart,
    onToggleWishlist,
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative">
            {title && (
                <div className="flex items-center justify-between mb-6">
                    <h2 className="heading-3">{title}</h2>
                    <a href="#" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                        See more →
                    </a>
                </div>
            )}

            <div className="relative group">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-100"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Products Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex-none w-[280px] snap-start"
                        >
                            <ProductCard
                                product={product}
                                onAddToCart={onAddToCart}
                                onToggleWishlist={onToggleWishlist}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-100"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductCarousel;
