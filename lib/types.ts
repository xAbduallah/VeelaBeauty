import { StaticImageData } from "next/image";

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

// Banner Types
export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: StaticImageData;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
  textColor?: string;
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

export interface SectionsItem {
  name: string;
  items: NavigationItem[];
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  sections?: SectionsItem[];
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isInWishlist?: boolean;
}

export interface SortOption {
  id: string;
  label: string;
}

export interface ProductsSectionProps {
  products: Product[];
  onSortChange?: (sortId: string) => void;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
}
export interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}

export interface FilterSectionData {
  id: string;
  title: string;
  items: FilterItem[];
}

export interface PriceRangeValue {
  min: number;
  max: number;
}

export interface CategoryFilterProps {
  categoryTitle: string;
  subcategoryTitle?: string;
  typeTitle?: string;
  filterSections?: FilterSectionData[];
  priceRange?: PriceRangeValue;
  onPriceChange?: (range: PriceRangeValue) => void;
  onFilterChange?: (
    sectionId: string,
    itemId: string,
    checked: boolean
  ) => void;
}

export interface FilterItem {
  id: string;
  label: string;
  count?: number;
  checked?: boolean;
}

export interface FilterSectionProps {
  title: string;
  items: FilterItem[];
  maxVisible?: number;
  onItemChange?: (itemId: string, checked: boolean) => void;
  defaultExpanded?: boolean;
}
