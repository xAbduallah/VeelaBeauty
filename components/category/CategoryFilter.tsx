"use client";

import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { CategoryFilterProps } from "@/lib/types";

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categoryTitle,
  subcategoryTitle,
  typeTitle,
  filterSections = [],
  priceRange = { min: 0, max: 1000 },
  onPriceChange,
  onFilterChange,
}) => {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    price: true,
    subCategory: false,
    brands: true,
    skinType: false,
    applicableArea: false,
    effectiveIngredients: false,
    productIs: true,
    skinConcerns: true,
  });
  const [searchValues, setSearchValues] = useState<Record<string, string>>({});

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const handlePriceChange = (field: "min" | "max", value: string) => {
    const numValue = parseInt(value) || 0;
    const newRange = { ...localPriceRange, [field]: numValue };
    setLocalPriceRange(newRange);
    if (onPriceChange) {
      onPriceChange(newRange);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleCheckboxChange = (sectionId: string, itemId: string) => {
    setSelectedFilters((prev) => {
      const current = prev[sectionId] || [];
      const isSelected = current.includes(itemId);
      const updated = isSelected
        ? current.filter((id) => id !== itemId)
        : [...current, itemId];
      return { ...prev, [sectionId]: updated };
    });
    if (onFilterChange) {
      onFilterChange(
        sectionId,
        itemId,
        !selectedFilters[sectionId]?.includes(itemId)
      );
    }
  };

  const handleSearchChange = (sectionId: string, value: string) => {
    setSearchValues((prev) => ({ ...prev, [sectionId]: value }));
  };

  const clearSearch = (sectionId: string) => {
    setSearchValues((prev) => ({ ...prev, [sectionId]: "" }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setSearchValues({});
    setLocalPriceRange({ min: 0, max: 1000 });
  };

  const filterData = {
    brands: ["Maybelline", "L'Oreal", "MAC", "NARS", "Estée Lauder"],
    productIs: [
      "Vegan",
      "Cruelty-Free",
      "Organic",
      "Hypoallergenic",
      "Dermatologist Tested",
    ],
    skinConcerns: ["Acne", "Dark Spots", "Wrinkles", "Dryness", "Oiliness"],
  };

  return (
    <aside className="w-full md:w-[216px] shrink-0">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[32px] leading-[24px] font-normal text-black">
          Filter
        </h2>
        <button
          onClick={clearAllFilters}
          className="text-[28px] leading-[24px] font-normal text-[#333333] hover:text-primary-500"
        >
          Clear
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="text-[24px] leading-[24px] font-normal text-black">
            Price
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ${
              expandedSections.price ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.price && (
          <div className="flex items-center justify-center gap-[18px] mb-4">
            <div className="flex items-center justify-center gap-1 px-2.5 py-0.5 border border-[#777777] rounded-sm w-[77px] h-[30px]">
              <input
                type="number"
                value={localPriceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                className="w-12 text-[14px] leading-[24px] font-normal text-[#606060] bg-transparent border-none outline-none"
              />
              <span className="text-[10px] leading-[24px] font-normal text-[#606060]">
                EPG
              </span>
            </div>
            <span className="text-[18px] leading-[24px] font-normal text-[#4A4A4A]">
              TO
            </span>
            <div className="flex items-center justify-center gap-1 px-2.5 py-0.5 border border-[#777777] rounded-sm w-[77px] h-[30px]">
              <input
                type="number"
                value={localPriceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                className="w-12 text-[14px] leading-[24px] font-normal text-[#606060] bg-transparent border-none outline-none"
              />
              <span className="text-[10px] leading-[24px] font-normal text-[#606060]">
                EPG
              </span>
            </div>
          </div>
        )}
        <div className="w-full h-px bg-[#8E8E8E]" />
      </div>

      {/* Sub Category Filter */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("subCategory")}
          className="flex items-center justify-center w-full text-left h-6"
        >
          <span className="text-[24px] leading-[24px] font-normal text-black">
            Sub Category
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ml-auto ${
              expandedSections.subCategory ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="w-full h-px bg-[#8E8E8E] mt-4" />
      </div>

      {/* Brands Filter with Search */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="text-[24px] leading-[24px] font-normal text-black">
            Brands
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ${
              expandedSections.brands ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.brands && (
          <>
            {/* Search Box */}
            <div className="mb-3 border border-[#8E8E8E] rounded-[5px] p-2 h-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-[18px] h-[18px] text-white" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValues.brands || ""}
                  onChange={(e) => handleSearchChange("brands", e.target.value)}
                  className="text-[16px] leading-[24px] font-normal text-[#777777] bg-transparent border-none outline-none w-full placeholder:text-[#777777]"
                />
              </div>
              {searchValues.brands && (
                <button
                  onClick={() => clearSearch("brands")}
                  className="text-[16px] leading-[24px] font-normal text-[#FF6666]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col items-end gap-3 w-[111px]">
              {filterData.brands.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer w-full"
                >
                  <div className="w-5 h-5 border border-[#606060] rounded-sm" />
                  <span className="text-[18px] leading-[24px] font-normal text-black">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </>
        )}
        <div className="w-full h-px bg-[#8E8E8E] mt-4" />
      </div>

      {/* Skin Type Filter */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("skinType")}
          className="flex items-center justify-center w-full text-left h-6"
        >
          <span className="text-[24px] leading-[24px] font-normal text-black">
            Skin Type
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ml-auto ${
              expandedSections.skinType ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="w-full h-px bg-[#8E8E8E] mt-4" />
      </div>

      {/* Applicable Area Filter */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("applicableArea")}
          className="flex items-center justify-center w-full text-left h-6"
        >
          <span className="text-[24px] leading-[28px] font-normal text-black">
            Applicable Area
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ml-auto ${
              expandedSections.applicableArea ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="w-full h-px bg-[#8E8E8E] mt-4" />
      </div>

      {/* Effective Ingredients Filter */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("effectiveIngredients")}
          className="flex items-center justify-center w-full text-left"
        >
          <span className="text-[24px] leading-[28px] font-normal text-black w-[186px]">
            Effective Ingredients
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ml-auto ${
              expandedSections.effectiveIngredients ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="w-full h-px bg-[#8E8E8E] mt-4" />
      </div>

      {/* Product Is Filter with Search */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("productIs")}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="text-[24px] leading-[24px] font-normal text-black">
            Product is
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ${
              expandedSections.productIs ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.productIs && (
          <>
            {/* Search Box */}
            <div className="mb-3 border border-[#8E8E8E] rounded-[5px] p-2 h-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-[18px] h-[18px] text-white" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValues.productIs || ""}
                  onChange={(e) =>
                    handleSearchChange("productIs", e.target.value)
                  }
                  className="text-[16px] leading-[24px] font-normal text-[#777777] bg-transparent border-none outline-none w-full placeholder:text-[#777777]"
                />
              </div>
              {searchValues.productIs && (
                <button
                  onClick={() => clearSearch("productIs")}
                  className="text-[16px] leading-[24px] font-normal text-[#FF6666]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col items-end gap-3 w-[111px]">
              {filterData.productIs
                .filter((item) =>
                  item
                    .toLowerCase()
                    .includes((searchValues.productIs || "").toLowerCase())
                )
                .map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCheckboxChange("productIs", item);
                    }}
                  >
                    <div
                      className={`w-5 h-5 border border-[#606060] rounded-sm flex items-center justify-center ${
                        selectedFilters.productIs?.includes(item)
                          ? "bg-[#333333]"
                          : "bg-white"
                      }`}
                    >
                      {selectedFilters.productIs?.includes(item) && (
                        <svg
                          className="w-3 h-3"
                          fill="white"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[18px] leading-[24px] font-normal text-black">
                      {item}
                    </span>
                  </label>
                ))}
            </div>
          </>
        )}
        <div className="w-full h-px bg-[#8E8E8E] mt-4" />
      </div>

      {/* Skin Concerns Solution Filter with Search */}
      <div className="mb-[18px]">
        <button
          onClick={() => toggleSection("skinConcerns")}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="text-[24px] leading-[28px] font-normal text-black w-[186px]">
            Skin concerns
            <br />
            solution
          </span>
          <ChevronDown
            className={`w-6 h-6 text-black transition-transform ${
              expandedSections.skinConcerns ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.skinConcerns && (
          <>
            {/* Search Box */}
            <div className="mb-3 border border-[#8E8E8E] rounded-[5px] p-2 h-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-[18px] h-[18px] text-white" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValues.skinConcerns || ""}
                  onChange={(e) =>
                    handleSearchChange("skinConcerns", e.target.value)
                  }
                  className="text-[16px] leading-[24px] font-normal text-[#777777] bg-transparent border-none outline-none w-full placeholder:text-[#777777]"
                />
              </div>
              {searchValues.skinConcerns && (
                <button
                  onClick={() => clearSearch("skinConcerns")}
                  className="text-[16px] leading-[24px] font-normal text-[#FF6666]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col items-end gap-3 w-[111px]">
              {filterData.skinConcerns
                .filter((item) =>
                  item
                    .toLowerCase()
                    .includes((searchValues.skinConcerns || "").toLowerCase())
                )
                .map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCheckboxChange("skinConcerns", item);
                    }}
                  >
                    <div
                      className={`w-5 h-5 border border-[#606060] rounded-sm flex items-center justify-center ${
                        selectedFilters.skinConcerns?.includes(item)
                          ? "bg-[#333333]"
                          : "bg-white"
                      }`}
                    >
                      {selectedFilters.skinConcerns?.includes(item) && (
                        <svg
                          className="w-3 h-3"
                          fill="white"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[18px] leading-[24px] font-normal text-black">
                      {item}
                    </span>
                  </label>
                ))}
            </div>
          </>
        )}
        <div className="w-full h-px bg-[#8E8E8E] mt-4" />
      </div>
    </aside>
  );
};

export default CategoryFilter;
