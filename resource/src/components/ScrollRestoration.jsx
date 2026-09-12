import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollRestoration() {
  const { pathname, search } = useLocation();
  const navigationType = useNavigationType();
  const resourceId = new URLSearchParams(search).get("resourceId") || "";
  const pageKey = pathname === "/resources" ? `${pathname}:${resourceId}` : pathname;
  const positions = useRef(new Map());
  const previousPage = useRef(null);

  useEffect(() => {
    // Filtering replaces the URL but must not move focus or scroll.
    if (previousPage.current === pageKey) return;
    const hasNavigated = previousPage.current !== null;
    previousPage.current = pageKey;
    if (hasNavigated) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    const savedPosition = navigationType === "POP" ? positions.current.get(pageKey) : 0;
    window.scrollTo(0, savedPosition || 0);
    document.title = pathname === "/" ? "AP courses | AP Resource Hub"
      : pathname === "/resources" ? `${resourceId || "Resources"} | AP Resource Hub`
      : pathname === "/about" ? "About | AP Resource Hub"
      : pathname === "/contact" ? "Contact | AP Resource Hub"
      : "Page not found | AP Resource Hub";
  }, [pageKey, navigationType, pathname, resourceId]);

  useEffect(() => {
    const savePosition = () => positions.current.set(pageKey, window.scrollY);
    window.addEventListener("scroll", savePosition, { passive: true });
    return () => window.removeEventListener("scroll", savePosition);
  }, [pageKey]);

  return null;
}
