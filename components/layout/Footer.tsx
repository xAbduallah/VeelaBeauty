"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/global/logo.png";
import qrCode from "@/public/images/footer/qr-code.svg";
import googlePlayIcon from "@/public/images/footer/GooglePlay.svg";
import appleStoreIcon from "@/public/images/footer/AppStore.svg";
import Button from "../ui/Button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDF5EB] w-full mt-6">
      <div className="main-section px-4 md:px-8 lg:px-0 pb-0">
        {/* Logo */}
        <div className="mb-12 lg:mb-[50px]">
          <Image src={logo} alt="Logo" className="w-[112px] h-[40px] md:w-[144px] md:h-[51px] lg:w-[192px] lg:h-[68px]" />
        </div>

        {/* Footer Links Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-[44px]">
          {/* Veela Beauty */}
          <div className="w-full">
            <h3 className="text-heading">Veela Beauty</h3>
            <div className="flex flex-col">
              <Link href="/brands" className="nav-text">
                Brand
              </Link>
              <Link href="/category/makeup" className="nav-text">
                Makeup
              </Link>
              <Link href="/category/skincare" className="nav-text">
                Skincare
              </Link>
              <Link href="/category/haircare" className="nav-text">
                Haircare
              </Link>
              <Link href="/category/bath-body" className="nav-text">
                Bath & Body
              </Link>
              <Link href="/category/perfumes" className="nav-text">
                Perfumes
              </Link>
              <Link href="/category/offers" className="nav-text">
                Sale & Offers
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="w-full">
            <h3 className="text-heading">Contact US</h3>
            <div className="flex flex-col">
              <Link href="/support" className="nav-text">
                Customer Support
              </Link>
              <Link href="/delivery" className="nav-text">
                Delivery Details
              </Link>
              <Link href="/terms" className="nav-text">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="nav-text">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Payment */}
          <div className="w-full">
            <h3 className="text-heading">Payment</h3>
            <div className="flex flex-col">
              <Link href="/payment" className="nav-text">
                Customer Support
              </Link>
              <Link href="/delivery" className="nav-text">
                Delivery Details
              </Link>
              <Link href="/terms" className="nav-text">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="nav-text">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Install App */}
          <div className="w-full">
            <h3 className="text-heading">Install App</h3>
            <div className="w-fit flex flex-col gap-[10px]">
              <Link href="#" className="block">
                <Image src={qrCode} alt="QR Code" width={100} height={31.63} />
              </Link>
              <Link href="#" className="block">
                <Image src={googlePlayIcon} alt="Google Play" width={100} height={31.63} />
              </Link>
              <Link href="#" className="block">
                <Image src={appleStoreIcon} alt="Apple Store" width={100} height={31.63} />
              </Link>
            </div>
          </div>

          {/* Newsletter - First on mobile/tablet, Last on desktop */}
          <div className="w-full max-sm:mb-5">
            <h3 className="text-heading">Newsletter</h3>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full max-lg:min-w-[200px] h-[40px] px-4 text-[16px] leading-[26px] text-[#A1A1AA] border border-[#E4E4E7] rounded-[10px] bg-white focus:outline-none"
                />
              </div>
              <Button variant="primary" size="md" fullWidth className="text-center max-lg:min-w-[200px]">
                Subscribe Now
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-[20px] mt-4">
              <Link href="#" className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
                <Twitter className="w-6 h-6 text-[#18181B]" />
              </Link>
              <Link href="#" className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
                <Facebook className="w-6 h-6 text-[#18181B]" />
              </Link>
              <Link href="#" className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
                <Instagram className="w-6 h-6 text-[#18181B]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E2E8F0] mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-[#090914] mb-6">
          Copyright @{" "}
          <Link target="_blank" href="https://optiflowsys.com/en" className="text-primary-500">
            OptiFlow Systems
          </Link>{" "}
          2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
