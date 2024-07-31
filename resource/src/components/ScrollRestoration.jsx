import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const scrollPositions = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/resources") {
      window.scrollTo(0, 150); // Always scroll to top for /resources
    } else if (scrollPositions.current[pathname] !== undefined) {
      window.scrollTo(0, scrollPositions.current[pathname]);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
