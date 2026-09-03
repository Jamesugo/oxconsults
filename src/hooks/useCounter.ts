import { useEffect, useState } from "react";

export function useCounter(end: number, duration: number = 2000, start = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
      
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}
