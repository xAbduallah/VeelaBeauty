"use client";

import React from "react";
import Link from "next/link";
import { navigationItems } from "@/lib/constants";

const Navigation: React.FC = () => {
    return (
        <nav className="border-b border-secondary-200 bg-white">
            <div className="container">
                <div className="flex items-center justify-center gap-6 py-3 overflow-x-auto">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-secondary-700 hover:text-black transition-colors whitespace-nowrap"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
