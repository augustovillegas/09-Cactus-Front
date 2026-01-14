import React, { useEffect, useState } from "react";

export const ToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const start = window.scrollY || window.pageYOffset;
    const startTime = performance.now();
    const duration = 400;

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

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver arriba"
      className="fixed bottom-24 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400 bg-black text-yellow-400 shadow-lg transition hover:bg-yellow-400 hover:text-black"
    >
      ↑
    </button>
  );
};
