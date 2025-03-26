"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
}

export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const formatNumber = (num: number): string => {
    const fixedNum = num.toFixed(decimals);
    const parts = fixedNum.toString().split(".");

    if (separator) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }

    return parts.join(".");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const startValue = 0;

          const updateCount = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            if (elapsedTime < duration) {
              // Utiliser une fonction d'accélération pour un effet plus naturel
              const progress = easeOutQuad(elapsedTime / duration);
              const currentValue = startValue + (end - startValue) * progress;
              setCount(currentValue);
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    // Stocker une référence à l'élément courant
    const currentElement = countRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      // Utiliser la référence stockée au lieu de countRef.current
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [end, duration, hasAnimated]);

  // Fonction d'accélération pour une animation plus naturelle
  const easeOutQuad = (t: number): number => {
    return t * (2 - t);
  };

  return (
    <span ref={countRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
