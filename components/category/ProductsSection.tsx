import React from "react";
import { ProductsSectionProps } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";

const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onAddToCart, onToggleWishlist }) => {
  return (
    <div className="flex-1">
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
