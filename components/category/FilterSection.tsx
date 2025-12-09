'use client';

import { FilterSectionProps } from '@/lib/types';
import React, { useState } from 'react';

const FilterSection: React.FC<FilterSectionProps> = ({ title, items, maxVisible = 5, onItemChange, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, maxVisible);
  const hasMore = items.length > maxVisible;

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    if (onItemChange) {
      onItemChange(itemId, checked);
    }
  };

  return (
    <div className="border-b border-secondary-200 py-4">
      {/* Section Header */}
      <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center justify-between w-full text-left">
        <span className="text-lg text-black">{title}</span>
        <svg className={`w-4 h-4 text-secondary-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Section Content */}
      {isExpanded && (
        <div className="mt-3 space-y-2">
          {visibleItems.map((item) => (
            <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={item.checked || false} onChange={(e) => handleCheckboxChange(item.id, e.target.checked)} className="w-4 h-4 rounded border-secondary-300 text-primary-500 focus:ring-primary-500 focus:ring-offset-0" />
              <span className="text-sm text-secondary-700 group-hover:text-secondary-900 flex-1">{item.label}</span>
              {item.count !== undefined && <span className="text-xs text-secondary-400">({item.count})</span>}
            </label>
          ))}

          {/* Show More/Less Button */}
          {hasMore && (
            <button onClick={() => setShowAll(!showAll)} className="text-sm text-primary-500 hover:text-primary-600 font-medium mt-2">
              {showAll ? 'Show Less' : `More (${items.length - maxVisible})`}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
