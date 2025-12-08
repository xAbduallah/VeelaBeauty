"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/ui/SearchBar";

const Header: React.FC = () => {
    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between py-4 gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="text-2xl font-bold tracking-wider">VEELA</div>
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-xl mx-4">
                        <SearchBar className="w-[500px]" placeholder="What are you looking for" />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        {/* Wishlist */}
                        <button className="p-2 hover:bg-secondary-100 rounded-full transition-colors">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>

                        {/* Cart */}
                        <button className="p-2 hover:bg-secondary-100 rounded-full transition-colors relative">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button>

                        {/* User Profile */}
                        <button className="p-2 hover:bg-secondary-100 rounded-full transition-colors">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
