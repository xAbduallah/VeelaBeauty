import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

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
    <html lang="en">
      <body>
        <Header />
        {/* <Navigation /> */}
        {/* <main className="min-h-screen">{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
