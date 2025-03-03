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
          
          let startTimestamp: number | null = null;
          const startValue = 0;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsedTime = timestamp - startTimestamp;
            
            if (elapsedTime < duration) {
              // Utiliser une fonction d'accélération pour un effet plus naturel
              const progress = easeOutQuart(elapsedTime / duration);
              const currentValue = startValue + (end - startValue) * progress;
              setCount(Math.floor(currentValue)); // Utiliser Math.floor pour un effet de comptage entier
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  // Fonction d'accélération pour une animation plus dynamique
  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  };

  return (
    <span ref={countRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
} 