"use client";

import React, { useState } from "react";

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
        <form onSubmit={handleSubmit} className={`relative ${className}`}>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 pl-12 pr-4 text-sm border border-secondary-300 rounded-full focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all"
                />
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </form>
    );
};

export default SearchBar;
