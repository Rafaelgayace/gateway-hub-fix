import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/10 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-display font-bold text-lg">C.I.A</span>
              <p className="font-body text-xs text-muted-foreground">Center Intelligence Agency</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a 
              href="#" 
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#" 
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Regras
            </a>
            <a 
              href="#" 
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} CIA. Todos os direitos reservados.
          </p>
        </div>

        {/* Classified stamp */}
        <div className="mt-8 text-center">
          <span className="inline-block px-4 py-1 border border-accent/30 text-accent font-display text-xs tracking-widest rotate-[-2deg]">
            CLASSIFICADO
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
