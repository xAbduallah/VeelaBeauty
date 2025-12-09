"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/global/logo.png";
import qrCode from "@/public/images/footer/qr-code.svg";
import googlePlayIcon from "@/public/images/footer/GooglePlay.svg";
import appleStoreIcon from "@/public/images/footer/AppStore.svg";
import Button from "../ui/Button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDF5EB] w-full">
      <div className="main-section px-4 md:px-8 lg:px-0 pb-0">
        {/* Logo */}
        <div className="mb-12 lg:mb-[50px]">
          <Image
            src={logo}
            alt="Logo"
            className="w-[112px] h-[40px] md:w-[144px] md:h-[51px] lg:w-[192px] lg:h-[68px]"
          />
        </div>

        {/* Footer Links Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-[44px]">
          {/* Veela Beauty */}
          <div className="w-full">
            <h3 className="text-[18px] font-semibold leading-[18px] tracking-[0.05555em] uppercase text-[#94A3B8] mb-5">
              Veela Beauty
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/brands"
                  className="text-[16px] leading-[24px] text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Brand
                </Link>
              </li>
              <li>
                <Link
                  href="/category/makeup"
                  className="text-[16px] leading-[24px] text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Makeup
                </Link>
              </li>
              <li>
                <Link
                  href="/category/skincare"
                  className="text-[16px] leading-[24px] text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  href="/category/haircare"
                  className="text-[16px] leading-[24px] text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Haircare
                </Link>
              </li>
              <li>
                <Link
                  href="/category/bath-body"
                  className="text-[16px] leading-[24px] text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Bath & Body
                </Link>
              </li>
              <li>
                <Link
                  href="/category/perfumes"
                  className="text-[16px] leading-[24px] text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Perfumes
                </Link>
              </li>
              <li>
                <Link
                  href="/category/offers"
                  className="text-[16px] leading-[24px] text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Sale & Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full">
            <h3 className="text-[18px] font-semibold leading-[25.52px] tracking-[0.05555em] uppercase text-[#94A3B8] mb-5">
              Contact US
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/support"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div className="w-full">
            <h3 className="text-[18px] font-semibold leading-[25.62px] tracking-[0.05555em] uppercase text-[#94A3B8] mb-5">
              Payment
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/payment"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[16px] leading-[24px] font-medium text-[#090914] hover:text-[#333333] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Install App */}
          <div className="w-full">
            <h3 className="text-[18px] font-semibold leading-[18px] tracking-[0.05555em] uppercase text-[#94A3B8] mb-5">
              Install App
            </h3>
            <div className="w-fit flex flex-col gap-[19px]">
              <Link href="#" className="block">
                <Image src={qrCode} alt="QR Code" width={100} height={31.63} />
              </Link>
              <Link href="#" className="block">
                <Image
                  src={googlePlayIcon}
                  alt="Google Play"
                  width={100}
                  height={31.63}
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src={appleStoreIcon}
                  alt="Apple Store"
                  width={100}
                  height={31.63}
                />
              </Link>
            </div>
          </div>

          {/* Newsletter - First on mobile/tablet, Last on desktop */}
          <div className="w-full max-sm:mb-5">
            <h3 className="text-[18px] font-semibold leading-[18px] tracking-[0.05555em] uppercase text-[#94A3B8] mb-5">
              Newsletter
            </h3>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full max-lg:min-w-[200px] h-[40px] px-4 text-[16px] leading-[26px] text-[#A1A1AA] border border-[#E4E4E7] rounded-[10px] bg-white focus:outline-none"
                />
              </div>
              <Button
                variant="primary"
                size="md"
                fullWidth
                className="text-center max-lg:min-w-[200px]"
              >
                Subscribe Now
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-[20px] mt-4">
              <Link
                href="#"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 24 24"
                  fill="#27272A"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 24 24"
                  fill="#18181B"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    stroke="#18181B"
                    strokeWidth="2"
                  />
                  <circle cx="16" cy="8" r="1.5" fill="#18181B" />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="#18181B"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E2E8F0] mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-[#090914] mb-6">
          Copyright @{" "}
          <Link
            target="_blank"
            href="https://optiflowsys.com/en"
            className="text-primary-500"
          >
            OptiFlow Systems
          </Link>{" "}
          2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
