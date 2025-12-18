import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 1500, suffix: "+", label: "Agentes Ativos" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 24, suffix: "/7", label: "Suporte" },
  { value: 100, suffix: "%", label: "Confidencial" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary text-glow">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(200 100% 50%) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-card/30 border border-primary/10 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="font-body text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
