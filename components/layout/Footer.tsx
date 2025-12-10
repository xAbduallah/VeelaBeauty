"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/global/logo.png";
import qrCode from "@/public/images/footer/qr-code.svg";
import googlePlayIcon from "@/public/images/footer/GooglePlay.svg";
import appleStoreIcon from "@/public/images/footer/AppStore.svg";
import Button from "../ui/Button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { navigationItems } from "@/lib/constants";
import { useTranslation, translateNavigation } from "@/lib/i18n";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  const { t: tNav } = useTranslation("nav");
  const translatedItems = useMemo(() => translateNavigation(navigationItems, tNav), [tNav]);

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
            <h3 className="text-heading">{t("footer.veela_beauty")}</h3>
            <div className="flex flex-col">
              {translatedItems.map((item) => (
                <Link key={item.label} href={item.href} className="nav-text">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="w-full">
            <h3 className="text-heading">{t("footer.contact_us")}</h3>
            <div className="flex flex-col">
              <Link href="/support" className="nav-text">
                {t("footer.customer_support")}
              </Link>
              <Link href="/delivery" className="nav-text">
                {t("footer.delivery_details")}
              </Link>
              <Link href="/terms" className="nav-text">
                {t("footer.terms_conditions")}
              </Link>
              <Link href="/privacy" className="nav-text">
                {t("footer.privacy_policy")}
              </Link>
            </div>
          </div>

          {/* Payment */}
          <div className="w-full">
            <h3 className="text-heading">{t("footer.payment")}</h3>
            <div className="flex flex-col">
              <Link href="/payment" className="nav-text">
                {t("footer.customer_support")}
              </Link>
              <Link href="/delivery" className="nav-text">
                {t("footer.delivery_details")}
              </Link>
              <Link href="/terms" className="nav-text">
                {t("footer.terms_conditions")}
              </Link>
              <Link href="/privacy" className="nav-text">
                {t("footer.privacy_policy")}
              </Link>
            </div>
          </div>

          {/* Install App */}
          <div className="w-full">
            <h3 className="text-heading">{t("footer.install_app")}</h3>
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
            <h3 className="text-heading">{t("footer.newsletter")}</h3>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t("footer.email_placeholder")}
                  className="w-full max-lg:min-w-[200px] h-[40px] px-4 text-[16px] leading-[26px] text-[#A1A1AA] border border-[#E4E4E7] rounded-[10px] bg-white focus:outline-none"
                />
              </div>
              <Button variant="primary" size="md" fullWidth className="text-center max-lg:min-w-[200px]">
                {t("footer.subscribe")}
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
          {t("footer.copyright")} @{" "}
          <Link target="_blank" href="https://optiflowsys.com/en" className="text-primary-500">
            OptiFlow Systems
          </Link>{" "}
          2025. {t("footer.all_rights_reserved")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
