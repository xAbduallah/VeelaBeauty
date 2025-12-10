"use client";

import { useTranslation as useTranslationBase } from "react-i18next";
import { Namespace } from "./config";
import { NavigationItem } from "@/lib/types";
import { TFunction } from "i18next";
import { useEffect } from "react";

export function useTranslation(namespace: Namespace = "common") {
  return useTranslationBase(namespace);
}

export function useLanguage() {
  const { i18n } = useTranslationBase();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language, typeof window !== "undefined"]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    isRTL: i18n.language === "ar",
  };
}

export function translateNavigation(items: NavigationItem[], t: TFunction): NavigationItem[] {
  return items.map((item) => ({
    ...item,
    label: t(item.label.toLowerCase().replace(/\s+/g, "_").replace(/&/g, "").replace(/__+/g, "_")),
    sections: item.sections?.map((section) => ({
      ...section,
      name: t(section.name.toLowerCase().replace(/\s+/g, "_")),
      items: section.items.map((subItem) => ({
        ...subItem,
        label: t(subItem.label.toLowerCase().replace(/\s+/g, "_").replace(/&/g, "").replace(/__+/g, "_")),
      })),
    })),
  }));
}
