import { ExternalLink, UserPlus } from "lucide-react";

const CIA_CONFIG = {
  DISCORD_SERVER_LINK: "https://discord.gg/ac2xz2tv",
  BOT_OAUTH_LINK: "https://discord.com/oauth2/authorize?client_id=SEU-CLIENT-ID"
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        
        {/* Logo */}
        <div className="relative z-10 mb-8 animate-fade-in">
          <div className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
            <img 
              src="/cia-logo.png" 
              alt="CIA Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback se a imagem não carregar
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center mb-8 animate-fade-in-delay">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] mb-4">
            CENTER INTELLIGENCE AGENCY
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent mx-auto" />
        </div>

        {/* Quote */}
        <p className="relative z-10 text-muted-foreground text-lg md:text-xl italic text-center max-w-2xl mb-12 animate-slide-up">
          "Em meio ao caos, nós somos a ordem invisível."
        </p>

        {/* Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 animate-slide-up">
          <a
            href={CIA_CONFIG.DISCORD_SERVER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-0.5 min-w-[200px]"
          >
            <ExternalLink className="w-4 h-4" />
            Entrar no Servidor
          </a>
          <a
            href={CIA_CONFIG.BOT_OAUTH_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-md bg-transparent text-foreground border border-border hover:bg-secondary transition-all hover:-translate-y-0.5 min-w-[200px]"
          >
            <UserPlus className="w-4 h-4" />
            Adicionar Bot
          </a>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="relative px-6 py-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4 block">
              🎯 Propósito Oficial
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              CIA
            </h2>
          </div>

          {/* Content */}
          <div className="text-muted-foreground leading-relaxed space-y-8">
            <p className="text-lg md:text-xl text-center font-medium text-foreground/90">
              A Center Intelligence Agency nasceu para atuar onde a linha entre civilização e colapso se torna tênue.
            </p>

            <p>
              Em um mundo fragmentado por conflitos silenciosos, rivalidades políticas, organizações clandestinas e ameaças que se expandem na escuridão, a CIA existe para garantir que o mundo continue em pé — mesmo quando tudo ao redor parece prestes a ruir.
            </p>

            {/* Statements Box */}
            <div className="py-8 border-t border-b border-border/50 space-y-3">
              <p className="text-foreground font-medium">Nós operamos antes que a crise comece.</p>
              <p className="text-foreground font-medium">Nós agimos onde ninguém mais consegue.</p>
              <p className="text-foreground font-medium">Nós enxergamos o que outros ignoram.</p>
            </div>

            <p>
              Enquanto nações discutem, governos hesitam e outras organizações lutam por poder, a CIA se move de forma precisa e silenciosa:
            </p>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-card/50 border border-border rounded">
                <p className="text-foreground font-semibold">Sempre um passo à frente.</p>
              </div>
              <div className="text-center p-4 bg-card/50 border border-border rounded">
                <p className="text-foreground font-semibold">Sempre onde é necessário.</p>
              </div>
              <div className="text-center p-4 bg-card/50 border border-border rounded">
                <p className="text-foreground font-semibold">Sempre no momento exato.</p>
              </div>
            </div>

            <p>
              Nosso propósito é preservar o equilíbrio global, neutralizar ameaças emergentes e responder ao caos com disciplina, estratégia e precisão absoluta.
            </p>

            <p>
              Não buscamos reconhecimento, glória ou aplausos — buscamos resultados. O mundo pode nunca conhecer os nomes de nossos agentes, mas sentirá as consequências de nossas vitórias.
            </p>

            <p>
              Mesmo em meio à desordem, à guerra silenciosa e à ascensão de outros grupos, a CIA mantém seu compromisso:
            </p>

            {/* Border List */}
            <div className="py-6 pl-6 border-l-2 border-muted space-y-4">
              <p className="text-foreground">Ser a primeira linha de defesa que ninguém vê.</p>
              <p className="text-foreground">Ser a voz que guia no meio do caos.</p>
              <p className="text-foreground">Ser a força que age quando o impossível se torna necessário.</p>
            </div>

            {/* Center Statements */}
            <div className="text-center py-8 space-y-2">
              <p className="text-foreground font-medium">Nós não competimos.</p>
              <p className="text-foreground font-medium">Nós não tememos.</p>
              <p className="text-foreground font-medium">Nós não falhamos.</p>
            </div>

            <p className="text-center italic">
              Enquanto outras organizações correm atrás da crise, a CIA já está lá — observando, calculando e executando.
            </p>

            {/* CTA */}
            <div className="text-center pt-8">
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Avante CIA!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/cia-logo.png" 
            alt="CIA Logo" 
            className="w-24 h-24 object-contain mx-auto mb-8 opacity-60"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Junte-se à CIA
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Entre para uma organização que opera nas sombras para garantir a ordem no caos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CIA_CONFIG.DISCORD_SERVER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-0.5 min-w-[200px]"
            >
              <ExternalLink className="w-4 h-4" />
              Servidor Discord
            </a>
            <a
              href={CIA_CONFIG.BOT_OAUTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-md bg-transparent text-foreground border border-border hover:bg-secondary transition-all hover:-translate-y-0.5 min-w-[200px]"
            >
              <UserPlus className="w-4 h-4" />
              Convidar Bot
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-semibold">CIA</div>
          <p className="text-muted-foreground text-sm">
            © 2024 Center Intelligence Agency. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
