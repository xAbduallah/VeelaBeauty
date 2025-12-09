import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const myFont = localFont({
  src: "../public/fonts/MyriadPro.otf",
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veela Beauty - Premium Cosmetics & Beauty Products",
  description:
    "Discover premium beauty products, cosmetics, skincare, and more at Veela Beauty. Shop top brands and exclusive deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
