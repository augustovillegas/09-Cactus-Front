import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTopInstant = () => {
  const html = document.documentElement;
  const previousBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  html.style.scrollBehavior = previousBehavior;
};

export const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    scrollToTopInstant();
  }, [location.pathname]);

  return null;
};
