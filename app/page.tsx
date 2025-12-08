"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import CategoryCard from "@/components/product/CategoryCard";
import ProductCarousel from "@/components/product/ProductCarousel";
import { sampleProducts, categories, featuredBrands } from "@/lib/constants";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-cream py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Main Hero Image */}
            <div className="md:col-span-2 lg:col-span-2 relative aspect-[4/3] lg:aspect-[16/9] bg-primary-100 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="heading-1 text-primary-600 mb-4">
                    New Collection
                  </h1>
                  <p className="text-lg text-secondary-600 mb-6">
                    Discover our latest beauty products
                  </p>
                  <Link
                    href="/catalog"
                    className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Side Images */}
            <div className="grid grid-cols-2 md:col-span-2 lg:col-span-2 gap-4">
              <div className="relative aspect-square bg-primary-50 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary-600">
                    Skincare
                  </span>
                </div>
              </div>
              <div className="relative aspect-square bg-beige-light rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-secondary-700">
                    Makeup
                  </span>
                </div>
              </div>
              <div className="relative aspect-square bg-beige rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-secondary-700">
                    Haircare
                  </span>
                </div>
              </div>
              <div className="relative aspect-square bg-primary-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary-600">
                    Fragrances
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Makeup Categories */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Makeup price</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Top Brands */}
      <section className="py-16 bg-cream">
        <Container>
          <div className="text-center mb-12">
            <h2 className="heading-2">Top Brands</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {featuredBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="text-center font-semibold text-sm">
                  {brand.name}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Favorite Products */}
      <section className="py-16">
        <Container>
          <ProductCarousel
            title="Favorite product for customer"
            products={sampleProducts}
          />
        </Container>
      </section>

      {/* Promotional Banner */}
      <section className="py-8">
        <Container>
          <div className="relative bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl p-12 overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <h2 className="heading-2 mb-4 text-primary-900">
                EXCLUSIVE COSMETICS
              </h2>
              <p className="text-lg mb-2 text-primary-800">
                KEEP YOURSELF BEAUTIFUL
              </p>
              <p className="text-4xl font-bold text-primary-600 mb-6">
                UP TO 50% OFF
              </p>
              <Link
                href="/sale"
                className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Shopping by Budget */}
      <section className="py-16 bg-cream">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-2">Shopping by budget</h2>
            <Link
              href="/catalog"
              className="text-sm font-medium text-primary-500 hover:text-primary-600"
            >
              See more →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/catalog?max=200"
              className="relative aspect-square bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm text-secondary-600 mb-2">
                  Beauty below
                </span>
                <span className="text-2xl font-bold">200 EGP</span>
              </div>
            </Link>
            <Link
              href="/catalog?max=400"
              className="relative aspect-square bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm text-secondary-600 mb-2">
                  Foundation below
                </span>
                <span className="text-2xl font-bold">400 EGP</span>
              </div>
            </Link>
            <Link
              href="/catalog?max=500"
              className="relative aspect-square bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm text-secondary-600 mb-2">
                  Mascara below
                </span>
                <span className="text-2xl font-bold">500 EGP</span>
              </div>
            </Link>
            <Link
              href="/catalog?max=450"
              className="relative aspect-square bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm text-secondary-600 mb-2">
                  Complete below
                </span>
                <span className="text-2xl font-bold">450 EGP</span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <Container>
          <ProductCarousel title="New Arrival" products={sampleProducts} />
        </Container>
      </section>
    </div>
  );
}
