import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/types";

export interface CategoryCardProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <Link href={`/category/${category.slug}`}>
            <div className="group relative aspect-square rounded-xl overflow-hidden bg-secondary-100 hover:shadow-xl transition-all duration-300">
                <Image
                    src={category.image || "/placeholder-category.jpg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                        {category.name}
                    </h3>
                    {category.productCount && (
                        <p className="text-sm text-white/90">
                            {category.productCount} products
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
