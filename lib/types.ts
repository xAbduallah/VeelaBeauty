// Product Types
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    subCategory?: string;
    brand: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    isNew?: boolean;
    isBestseller?: boolean;
    variants?: ProductVariant[];
    specifications?: ProductSpecification[];
}

export interface ProductVariant {
    id: string;
    name: string;
    value: string;
    image?: string;
}

export interface ProductSpecification {
    label: string;
    value: string;
}

// Category Types
export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    productCount: number;
    subcategories?: SubCategory[];
}

export interface SubCategory {
    id: string;
    name: string;
    slug: string;
}

// Brand Types
export interface Brand {
    id: string;
    name: string;
    slug: string;
    logo: string;
    featured?: boolean;
}

// Review Types
export interface Review {
    id: string;
    productId: string;
    userName: string;
    userAvatar?: string;
    rating: number;
    date: string;
    title?: string;
    comment: string;
    helpful?: number;
    verified?: boolean;
}

// Filter Types
export interface FilterOption {
    id: string;
    label: string;
    count?: number;
}

export interface PriceRange {
    min: number;
    max: number;
}

export interface ProductFilters {
    priceRange?: PriceRange;
    categories?: string[];
    brands?: string[];
    skinTypes?: string[];
    applicableAreas?: string[];
    effectiveIngredients?: string[];
    concerns?: string[];
}

// Cart Types
export interface CartItem {
    product: Product;
    quantity: number;
    selectedVariant?: ProductVariant;
}

// Wishlist Types
export interface WishlistItem {
    productId: string;
    addedAt: string;
}

// Navigation Types
export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
}
