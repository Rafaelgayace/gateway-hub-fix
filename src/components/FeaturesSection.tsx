import { Shield, Eye, Lock, Users, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proteção Total",
    description: "Segurança de nível militar para todos os membros da organização.",
  },
  {
    icon: Eye,
    title: "Vigilância 24/7",
    description: "Monitoramento constante para garantir a integridade das operações.",
  },
  {
    icon: Lock,
    title: "Criptografia Avançada",
    description: "Comunicações protegidas com os mais altos padrões de segurança.",
  },
  {
    icon: Users,
    title: "Rede de Agentes",
    description: "Comunidade exclusiva de operadores altamente qualificados.",
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Equipe sempre pronta para ação imediata quando necessário.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Operações coordenadas em escala mundial sem fronteiras.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-glow">
            Capacidades <span className="text-primary">Operacionais</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Recursos exclusivos disponíveis para membros da agência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-lg bg-card/50 border border-primary/10 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-card/80"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 rounded-tr-lg group-hover:border-primary/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/20 rounded-bl-lg group-hover:border-primary/50 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
