import type { Product, Category, Brand, Review, NavigationItem } from "./types";

// Navigation Menu Items
export const navigationItems: NavigationItem[] = [
    { label: "Brands", href: "/brands" },
    { label: "Makeup", href: "/catalog/makeup" },
    { label: "Skincare", href: "/catalog/skincare" },
    { label: "Haircare", href: "/catalog/haircare" },
    { label: "Bath & Body", href: "/catalog/bath-body" },
    { label: "Perfumes", href: "/catalog/perfumes" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Sale & Offers", href: "/sale" },
];

// Featured Brands
export const featuredBrands: Brand[] = [
    { id: "1", name: "NARS", slug: "nars", logo: "/brands/nars.png", featured: true },
    { id: "2", name: "Olay", slug: "olay", logo: "/brands/olay.png", featured: true },
    { id: "3", name: "KIKO", slug: "kiko", logo: "/brands/kiko.png", featured: true },
    { id: "4", name: "SHISEIDO", slug: "shiseido", logo: "/brands/shiseido.png", featured: true },
    { id: "5", name: "LA ROCHE-POSAY", slug: "la-roche-posay", logo: "/brands/laroche.png", featured: true },
    { id: "6", name: "L'OREAL", slug: "loreal", logo: "/brands/loreal.png", featured: true },
];

// Categories
export const categories: Category[] = [
    {
        id: "1",
        name: "Face",
        slug: "face",
        image: "/categories/face.jpg",
        productCount: 234,
    },
    {
        id: "2",
        name: "Lips",
        slug: "lips",
        image: "/categories/lips.jpg",
        productCount: 189,
    },
    {
        id: "3",
        name: "Eyes",
        slug: "eyes",
        image: "/categories/eyes.jpg",
        productCount: 156,
    },
    {
        id: "4",
        name: "Nails",
        slug: "nails",
        image: "/categories/nails.jpg",
        productCount: 98,
    },
];

// Sample Products
export const sampleProducts: Product[] = [
    {
        id: "1",
        name: "Jelly Wow Hydrating Lip Oil Berry Involved",
        slug: "jelly-wow-lip-oil-berry",
        description: "Ultra-hydrating lip oil with a glossy finish and berry tint",
        price: 30.88,
        originalPrice: 45.0,
        images: ["/products/lip-oil-1.jpg"],
        category: "makeup",
        subCategory: "lips",
        brand: "NARS",
        rating: 4.5,
        reviewCount: 234,
        inStock: true,
        isNew: false,
        isBestseller: true,
    },
    {
        id: "2",
        name: "Sephora Rouge A Lovers Longue Tenue",
        slug: "sephora-rouge-lovers",
        description: "Long-lasting lipstick with rich color payoff",
        price: 40.50,
        originalPrice: 55.0,
        images: ["/products/lipstick-1.jpg"],
        category: "makeup",
        subCategory: "lips",
        brand: "Sephora",
        rating: 4.7,
        reviewCount: 189,
        inStock: true,
        isNew: true,
    },
];

// Sample Reviews
export const sampleReviews: Review[] = [
    {
        id: "1",
        productId: "1",
        userName: "Sarah M.",
        userAvatar: "/avatars/user-1.jpg",
        rating: 5,
        date: "2024-11-25",
        title: "Love it!",
        comment: "This lip oil is amazing! Super hydrating and the color is perfect.",
        helpful: 12,
        verified: true,
    },
    {
        id: "2",
        productId: "1",
        userName: "Emily R.",
        userAvatar: "/avatars/user-2.jpg",
        rating: 4,
        date: "2024-11-20",
        comment: "Great product, but wish it lasted longer on the lips.",
        helpful: 8,
        verified: true,
    },
];
