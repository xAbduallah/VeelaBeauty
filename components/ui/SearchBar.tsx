"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "What are you looking for",
  onSearch,
  className = "",
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Search className="w-5 md:w-8 text-secondary-700" />
      <form onSubmit={handleSubmit} className={`relative w-full ${className}`}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full py-2 text-xs md:text-sm border-transparent focus:outline-none focus:border-transparent transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
