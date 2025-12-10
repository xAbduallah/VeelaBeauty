export const defaultLocale = "en";
export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const namespaces = ["common", "nav"] as const;
export type Namespace = (typeof namespaces)[number];

export const defaultNamespace: Namespace = "common";
