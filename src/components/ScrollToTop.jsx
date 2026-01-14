import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const smoothScrollToTop = (duration = 400) => {
  const start = window.scrollY || window.pageYOffset;
  const startTime = performance.now();

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, Math.round(start * (1 - ease)));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    smoothScrollToTop();
  }, [location.pathname]);

  return null;
};
