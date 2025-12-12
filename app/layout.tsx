import "./globals.css";
import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Veela Beauty - Premium Cosmetics & Beauty Products",
  description: "Discover premium beauty products, cosmetics, skincare, and more at Veela Beauty. Shop top brands and exclusive deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
