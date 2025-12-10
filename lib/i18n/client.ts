"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { defaultLocale, locales, defaultNamespace, namespaces } from "./config";

const runsOnServerSide = typeof window === "undefined";

// Initialize i18next for client-side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng: undefined, // detect from browser
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns: namespaces,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18next;
