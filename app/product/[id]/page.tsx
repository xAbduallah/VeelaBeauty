"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Button from "@/components/ui/Button";

const ProductDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const product = {
    brand: "Les Filles en Rouje • Rouje Paris",
    name: "Sephora Rouge a Levers Longue Tenue",
    rating: 4,
    reviewCount: 1500,
    wishlistCount: 12500,
    beautyPoints: 995,
    price: 40.5,
    taxIncluded: true,
    seller: "Veela beauty",
    badges: [
      { icon: "🌱", label: "VEGAN" },
      { icon: "🐰", label: "CRUELTY FREE" },
      { icon: "💋", label: "LIPS" },
    ],
    description:
      "Le Rouge our iconic matte lipstick has a clean and natural formula for a comfortable and smooth application. Available in six iconic shades perfect for a blurred effect. The Camille shade : a timeless burgundy red",
    images: ["/images/product.svg", "/images/product.svg", "/images/product.svg", "/images/product.svg", "/images/product.svg"],
    variants: [
      { id: 1, name: "Variant 1", image: "/images/product.svg" },
      { id: 2, name: "Variant 2", image: "/images/product.svg" },
      { id: 3, name: "Variant 3", image: "/images/product.svg" },
      { id: 4, name: "Variant 4", image: "/images/product.svg" },
    ],
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  return (
    <section className="w-full">
      <div className="main-section p-8 bg-[#F5F1ED] rounded-2xl">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Side - Images */}
          <div className="flex-1 flex flex-col justify-between md:max-w-[300px] lg:max-w-[410px]">
            {/* Main Image */}
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="relative w-full aspect-square">
                <Image src={product.images[selectedImage]} alt={product.name} fill className="object-contain" />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 justify-start">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-full aspect-square bg-white rounded-[10px] border-2 transition-all ${
                    selectedImage === idx ? "border-primary-500" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Brand */}
            <p className="text-[14px] md:text-[18px] lg:text-[24px] text-gray-600">{product.brand}</p>

            {/* Product Name */}
            <h1 className="text-[28px] md:text-[32px] lg:text-[44px] font-semibold text-black leading-tight">{product.name}</h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-3 flex-wrap">
              <StarRating rating={product.rating} size="lg" />
              <span className="text-[16px] text-gray-600">{product.reviewCount.toLocaleString()} Review</span>
              <button className="text-[16px] text-primary-500 underline">Write a review</button>
              <div className="flex items-center gap-2">
                <Heart className={`w-5 h-5 ${isInWishlist ? "fill-red-500 text-red-500" : "text-black"}`} />
                <span className="text-[16px] font-semibold">{(product.wishlistCount / 1000).toFixed(1)}K</span>
              </div>
            </div>

            {/* Beauty Points */}
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
              Earn <span className="text-primary-500 font-bold">{product.beautyPoints}</span> Beauty Point When Purchasing This Item
            </p>

            {/* Price & Seller */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-black">${product.price.toFixed(2)}</span>
                <span className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-600 ml-2">Tax Include</span>
              </div>
              <div className="flex flex-col items-start text-right">
                <div className="flex items-center gap-2 justify-end">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-[16px]">
                    Sold by <span className="text-primary-500 font-semibold">{product.seller}</span>
                  </span>
                </div>
                <button className="text-[14px] text-gray-600 underline">See other buyers</button>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4">
              {product.badges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center w-12 h-12 border-2 border-dashed border-gray-400 rounded-full">
                  <span className="text-[16px]">{badge.icon}</span>
                  <span className="text-[8px] text-gray-600 text-center uppercase">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-[24px] font-semibold text-black mb-2">Description</h2>
              <p className="text-[16px] text-gray-700 leading-relaxed">
                {showFullDescription ? product.description : `${product.description.slice(0, 100)}...`}
                <button onClick={() => setShowFullDescription(!showFullDescription)} className="text-primary-500 ml-1">
                  {showFullDescription ? "See Less" : "See More.."}
                </button>
              </p>
            </div>

            {/* Available Options & Quantity */}
            <div className="flex items-start justify-between gap-8 flex-wrap">
              {/* Available Options */}
              <div className="flex-1">
                <h3 className="text-[20px] font-semibold text-black mb-3">Available Option</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(idx)}
                      className={`relative w-16 h-16 bg-white rounded-full border-2 transition-all ${
                        selectedVariant === idx ? "border-primary-500 ring-2 ring-primary-200" : "border-gray-300"
                      }`}
                    >
                      <Image src={variant.image} alt={variant.name} fill className="object-contain p-2" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-[20px] font-semibold text-black mb-3">Quantity</h3>
                <div className="flex items-center gap-4 border border-gray-300 rounded-lg px-2">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-[20px] font-semibold min-w-[40px] text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 99}
                    className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-2">
              <Button variant="primary" size="lg" fullWidth>
                Add to card
              </Button>
              <button
                onClick={() => setIsInWishlist(!isInWishlist)}
                className={`w-14 h-14 flex items-center justify-center border-2 rounded-lg transition-all ${
                  isInWishlist ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-400"
                }`}
              >
                <Heart className={`w-6 h-6 ${isInWishlist ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
