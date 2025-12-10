"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import logo from "@/public/images/global/logo.png";
import Image from "next/image";
import { CircleDollarSign, Handbag, Heart } from "lucide-react";
import Button from "../ui/Button";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="main-section flex flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-[112px] h-[40px] md:w-[144px] md:h-[51px] lg:w-[192px] lg:h-[68px]" />
          </Link>

          {/* Search Bar */}
          <div className="w-[200px] md:w-[300px] lg:w-[500px] p-[2px] md:p-[5px] lg:p-3 rounded-lg border-2 border-secondary-300">
            <SearchBar placeholder="What are you looking for" />
          </div>

          <div className="flex items-center justify-evenly gap-3">
            <Link href="/">
              <Handbag className="w-[24px] lg:w-[30px]" />
            </Link>
            <Link href="/" className="hidden md:block">
              <Heart className="w-[24px] lg:w-[30px]" />
            </Link>
            <Link href="/" className="hidden md:block">
              <CircleDollarSign className="w-[24px] lg:w-[30px]" />
            </Link>
            <Button variant="primary" className="hidden md:block">
              Login
            </Button>
            <Button variant="outline" size="sm" className="hidden md:block">
              AR
            </Button>
          </div>
        </div>

        {/* Navigation Bar */}
        <Suspense fallback={<div className="w-full h-[60px]" />}>
          <NavBar />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
