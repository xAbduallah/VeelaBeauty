import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { navigationItems } from "@/lib/constants";
import logo from "@/public/images/global/logo.png";
import useActiveNav from "../hooks/useActiveNav";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { push } = useRouter();
  const [selectedItems, setItem] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedSection = navigationItems.find((i) => i.label == selectedItems);
  const { isActive } = useActiveNav(navigationItems);

  const activeStyle = (item: any) => {
    return isActive(item.href)
      ? "text-primary-500"
      : "text-gray-700 hover:text-primary-700 active:text-primary-700";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setItem("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full relative" ref={dropdownRef}>
      {/* Custom Carousel for sm and md */}
      <div className="block lg:hidden relative">
        {/* Scrollable Container */}
        <div
          className="overflow-x-auto scrollbar-hide scroll-smooth ltr:mr-4 rtl:ml-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center justify-between gap-6 mx-4 py-3">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  if (item.label === selectedItems) {
                    setItem("");
                    push(item.href);
                  } else setItem(item.label);
                }}
                className={`text-lg sm:text-xl font-medium ${activeStyle(
                  item
                )} transition-colors whitespace-nowrap relative group`}
              >
                {item.label}
                <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Flex layout for lg and above */}
      <div className="hidden lg:flex justify-between gap-10 p-3">
        {navigationItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            onClick={() => setItem("")}
            onMouseEnter={() => setItem(item.label)}
            className={`text-2xl font-medium ${activeStyle(
              item
            )} transition-colors whitespace-nowrap relative group`}
          >
            {item.label}
            <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {selectedSection && selectedSection.sections && (
        <div
          onMouseLeave={() => setItem("")}
          className="absolute top-[58px] lg:top-[56px] left-1/2 -translate-x-1/2 h-auto flex items-start z-50 border-t-3 border-[#FBDBB3]"
          style={{ width: "100vw" }}
        >
          <div className="main-section w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-6 pb-1 px-4 bg-white backdrop-blur-3xl shadow-black/5 shadow-lg rounded-[2px]">
            {selectedSection.sections.map((section) => (
              <div key={section.name} className="flex flex-col gap-[2px]">
                <h3 className="text-black text-[20px] font-bold">
                  {section.name}
                </h3>
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setItem("")}
                    className="text-secondary-500 text-[18px] hover:text-primary-500 hover:underline w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Image
              src={logo}
              alt="Logo"
              width={192}
              height={68}
              className="w-[112px] h-auto md:w-[144px] lg:w-[192px]"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
