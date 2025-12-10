"use client";

import React, { Activity, useState } from "react";
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
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    price: true,
    category: true,
    skintype: true,
    applicableArea: true,
    effectiveMaterial: true,
    concerns: true,
  });
  const [searchValues, setSearchValues] = useState<Record<string, string>>({});

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

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
      const updated = isSelected ? current.filter((id) => id !== itemId) : [...current, itemId];
      return { ...prev, [sectionId]: updated };
    });
    if (onFilterChange) {
      onFilterChange(sectionId, itemId, !selectedFilters[sectionId]?.includes(itemId));
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

  return (
    <aside className="w-full md:w-[160px] shrink-0">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-2 border-b border-[#8E8E8E]/50">
        <h2 className="text-[24px] tracking-[0.05em] font-bold text-black">Filter</h2>
        <button onClick={clearAllFilters} className="nav-text text-[24px] font-bold">
          Clear
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="mb-[8px]">
        <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full text-left mb-2">
          <span className="text-[18px] tracking-[0.05em] font-bold text-black">Price</span>
          <ChevronDown className={`w-6 h-6 text-black transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
        </button>

        <Activity mode={expandedSections.price ? "visible" : "hidden"}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 px-1.5 border border-[#777777] rounded-sm">
              <input
                type="number"
                value={localPriceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                className="w-9 text-[14px] text-[#606060] border-none outline-none no-spinner"
              />
              <span className="text-[10px] font-normal text-black">EPG</span>
            </div>
            <span className="text-[10px] font-normal text-black">TO</span>
            <div className="flex items-center gap-1 px-1.5 border border-[#777777] rounded-sm">
              <input
                type="number"
                value={localPriceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                className="w-9 text-[14px] text-[#606060] border-none outline-none no-spinner"
              />
              <span className="text-[10px] font-normal text-black">EPG</span>
            </div>
          </div>
        </Activity>
      </div>

      <Activity mode={filterSections.length > 0 ? "visible" : "hidden"}>
        <div className="flex flex-col items-center justify-center">
          {filterSections.map((section) => (
            <div key={section.id} className="flex flex-col items-start gap-2 w-full border-t border-[#8E8E8E]/50 py-3">
              <button onClick={() => toggleSection(section.id)} className="flex items-center justify-between w-full text-left">
                <span className="text-[18px] tracking-[0.05em] font-bold text-black">{section.title}</span>
                <ChevronDown className={`w-6 h-6 text-black transition-transform ${expandedSections[section.id] ? "rotate-180" : ""}`} />
              </button>

              <Activity mode={expandedSections[section.id] ? "visible" : "hidden"}>
                <div className="flex flex-col items-center justify-center">
                  {section.items.map((item) => (
                    <label key={item.id} className="flex items-center gap-2 cursor-pointer w-full select-none">
                      <input type="checkbox" checked={item.checked} onChange={() => handleCheckboxChange(section.id, item.id)} />
                      <span className="text-[14px] font-extrabold text-black/80">{item.label}</span>
                    </label>
                  ))}
                </div>
              </Activity>
            </div>
          ))}
        </div>
      </Activity>
    </aside>
  );
};

export default CategoryFilter;
