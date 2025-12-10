"use client";

import { I18nextProvider } from "react-i18next";
import i18next from "./client";
import { useEffect, useState } from "react";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Wait for i18next to be fully initialized
    if (i18next.isInitialized) {
      setIsInitialized(true);
    } else {
      i18next.on("initialized", () => {
        setIsInitialized(true);
      });
    }
  }, []);

  // Show loading or children based on initialization state
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
