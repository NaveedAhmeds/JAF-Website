
import { useEffect, useState } from 'react';

interface CountingNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export const CountingNumber = ({ end, duration = 2000, suffix = "" }: CountingNumberProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime: number;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counting-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <span id={`counting-${end}`}>
      {count}{suffix}
    </span>
  );
};
