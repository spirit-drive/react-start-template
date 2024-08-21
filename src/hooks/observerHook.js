import { useRef, useEffect } from "react";

export const useScrollToFetchData = (someFunc) =>
    {
      const bottom = useRef(null);
    
      useEffect(() => {
        const bottomCurrent = bottom.current;
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.8,
        };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            someFunc();
          });
        }, options);
    
        if (bottomCurrent) {
          observer.observe(bottomCurrent);
        }
    
        return () => {
          if (bottomCurrent) {
            observer.unobserve(bottomCurrent);
          }
        };
      }, [someFunc]);
    
      return bottom;
    }