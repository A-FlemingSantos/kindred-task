import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">✨ Gerencie projetos com eficiência</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Agilize o Trabalho
            <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              em Equipe
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Feito para pequenas equipes que querem crescer sem complicações
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/cadastro">
              <Button variant="default" size="lg" className="w-full sm:w-64 group">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-64">
                Entrar
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-muted-foreground">
            <p className="text-sm mb-4">Confiado por mais de 1.000 equipes em todo o Brasil</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-sm font-semibold">Startup Inc.</span>
              <span className="text-sm font-semibold">Tech Solutions</span>
              <span className="text-sm font-semibold">Creative Agency</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
