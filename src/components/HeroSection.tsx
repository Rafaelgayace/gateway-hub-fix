import { Button } from "@/components/ui/button";
import { Shield, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(200 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(200 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }}
      />
      
      {/* Radial glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(200 100% 50% / 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center px-4">
        {/* Logo/Icon */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card border border-primary/30 animate-pulse-glow">
            <Shield className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider text-glow opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-primary">C</span>
          <span className="text-foreground">.</span>
          <span className="text-primary">I</span>
          <span className="text-foreground">.</span>
          <span className="text-primary">A</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="font-display text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Center Intelligence Agency
        </p>

        {/* Tagline */}
        <p 
          className="font-body text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          Em meio ao caos, nós somos a{" "}
          <span className="text-primary font-semibold">ordem invisível</span>.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <Button variant="hero" size="xl" asChild>
            <a href="https://discord.gg/cia" target="_blank" rel="noopener noreferrer">
              <Eye className="w-5 h-5 mr-2" />
              Junte-se à Agência
            </a>
          </Button>
          <Button variant="outline" size="xl">
            Saiba Mais
          </Button>
        </div>

        {/* Status indicator */}
        <div 
          className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s' }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-body tracking-wider">STATUS: OPERACIONAL</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
