import React from "react";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export interface ProductGridProps {
    products: Product[];
    columns?: 2 | 3 | 4;
    onAddToCart?: (product: Product) => void;
    onToggleWishlist?: (productId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
    products,
    columns = 3,
    onAddToCart,
    onToggleWishlist,
}) => {
    const gridColsClass = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <div className={`grid ${gridColsClass[columns]} gap-6`}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
