import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-cream border-t border-secondary-200 mt-20">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Veela Beauty */}
                    <div>
                        <h3 className="font-semibold text-black mb-4">VEELA BEAUTY</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Brand
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/makeup"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Makeup
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/skincare"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Skincare
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/haircare"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Haircare
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bath-body"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Bath & Body
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sale"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Sale & Offers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="font-semibold text-black mb-4">CONTACT US</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/support"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/delivery"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Delivery Details
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Payment */}
                    <div>
                        <h3 className="font-semibold text-black mb-4">PAYMENT</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/delivery"
                                    className="text-sm text-secondary-600 hover:text-black transition-colors"
                                >
                                    Delivery Details
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Install App */}
                    <div>
                        <h3 className="font-semibold text-black mb-4">INSTALL APP</h3>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="#"
                                className="text-sm text-secondary-600 hover:text-black transition-colors"
                            >
                                App Store
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-secondary-600 hover:text-black transition-colors"
                            >
                                Google Play
                            </Link>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-black mb-4">NEWSLETTER</h3>
                        <p className="text-sm text-secondary-600 mb-4">
                            Subscribe to get updates on our latest offers!
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 text-sm border border-secondary-300 rounded-lg focus:outline-none focus:border-black"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-secondary-200">
                    <a
                        href="#"
                        className="p-2 hover:bg-secondary-200 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="p-2 hover:bg-secondary-200 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="p-2 hover:bg-secondary-200 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-secondary-500 mt-6">
                    © Copyright 2024. All Rights Reserved by Veela
                </div>
            </div>
        </footer>
    );
};

export default Footer;
