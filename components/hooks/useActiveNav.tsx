"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type NavChild = { href: string };
type NavItem = { href: string; children?: NavChild[] };

export default function useActiveNav(navigation: NavItem[]) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeParent, setActiveParent] = useState<string | null>(null);

  const normalizePath = (path: string) =>
    path.replace(/^\/(en|ar)(?=\/|$)/, "").toLowerCase() || "/";

  const stripHash = (url: string) => url.split("#")[0];
  const extractHash = (url: string) => {
    const idx = url.indexOf("#");
    return idx >= 0 ? url.slice(idx).toLowerCase() : "";
  };

  const path = normalizePath(pathname);
  const updateHighlight = () => {
    const currentHash =
      typeof window !== "undefined" ? window.location.hash.toLowerCase() : "";

    // --- Case 1: hash present → highlight only hash parent ---
    if (currentHash) {
      const matchedParent =
        navigation.find((parent: NavItem) => {
          const parentHash = extractHash(parent.href);
          if (parentHash && parentHash === currentHash) return true;
          return parent.children?.some(
            (child: NavChild) => extractHash(child.href) === currentHash
          );
        }) || null;

      setActiveParent(matchedParent ? matchedParent.href : null);
      return;
    }

    // --- Case 2: path-based parents ---
    const matchedParent =
      navigation.find((parent: NavItem) => {
        const parentPath = normalizePath(stripHash(parent.href));

        // Exact match (e.g., /products)
        if (parentPath === path) return true;

        // Child path match (e.g., /frappe/erp-next → /frappe)
        return parent.children?.some((child: NavChild) => {
          const childPath = normalizePath(stripHash(child.href));
          return (
            path === childPath ||
            path.startsWith(childPath + "/") ||
            path.startsWith(parentPath + "/")
          );
        });
      }) || null;

    // --- Case 3: Home fallback ---
    if (!matchedParent && path === "/") {
      const home = navigation.find((i) => normalizePath(i.href) === "/");
      setActiveParent(home ? home.href : null);
    } else {
      setActiveParent(matchedParent ? matchedParent.href : null);
    }
  };

  useEffect(() => {
    updateHighlight();
    const handle = () => updateHighlight();
    window.addEventListener("hashchange", handle);
    window.addEventListener("popstate", handle);
    return () => {
      window.removeEventListener("hashchange", handle);
      window.removeEventListener("popstate", handle);
    };
  }, [pathname, searchParams]);

  const isActive = (href: string) => href === activeParent;

  return { activeParent, isActive };
}
