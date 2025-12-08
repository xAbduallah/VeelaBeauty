import React from "react";

export interface PriceDisplayProps {
    price: number;
    originalPrice?: number;
    currency?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
    price,
    originalPrice,
    currency = "EGP",
    size = "md",
    className = "",
}) => {
    const hasDiscount = originalPrice && originalPrice > price;
    const discountPercentage = hasDiscount
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    const sizeClasses = {
        sm: "text-sm",
        md: "text-lg",
        lg: "text-2xl",
    };

    const originalPriceSizeClasses = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <span className={`${sizeClasses[size]} font-semibold text-black`}>
                {currency} {price.toFixed(2)}
            </span>
            {hasDiscount && (
                <>
                    <span
                        className={`${originalPriceSizeClasses[size]} text-secondary-400 line-through`}
                    >
                        {currency} {originalPrice.toFixed(2)}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium text-error bg-error/10 rounded">
                        -{discountPercentage}%
                    </span>
                </>
            )}
        </div>
    );
};

export default PriceDisplay;
