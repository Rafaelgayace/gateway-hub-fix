import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{ transform: 'translateY(-50px)' }}
        />
        <div 
          className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{ transform: 'translateY(50px)' }}
        />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body uppercase tracking-wider mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Recrutamento Aberto
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow">
            Pronto para se juntar às{" "}
            <span className="text-primary">sombras</span>?
          </h2>

          <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
            A CIA está sempre em busca de novos talentos. Se você possui as habilidades
            necessárias e está pronto para fazer parte de algo maior, este é o momento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://discord.gg/cia" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                Entrar no Discord
              </a>
            </Button>
            <Button variant="glow" size="xl">
              Ver Requisitos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-primary/10">
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
              Comunicação segura • Dados criptografados • Anonimato garantido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
