"use client";

import React, { useState } from "react";

export interface QuantitySelectorProps {
    initialQuantity?: number;
    min?: number;
    max?: number;
    onChange?: (quantity: number) => void;
    className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    initialQuantity = 1,
    min = 1,
    max = 99,
    onChange,
    className = "",
}) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleDecrease = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            if (onChange) onChange(newQuantity);
        }
    };

    const handleIncrease = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            if (onChange) onChange(newQuantity);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= min && value <= max) {
            setQuantity(value);
            if (onChange) onChange(value);
        }
    };

    return (
        <div className={`inline-flex items-center border border-secondary-300 rounded-lg ${className}`}>
            <button
                onClick={handleDecrease}
                disabled={quantity <= min}
                className="px-4 py-2 hover:bg-secondary-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
            </button>
            <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                min={min}
                max={max}
                className="w-12 text-center border-x border-secondary-300 py-2 focus:outline-none"
            />
            <button
                onClick={handleIncrease}
                disabled={quantity >= max}
                className="px-4 py-2 hover:bg-secondary-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    );
};

export default QuantitySelector;
