import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, BarChart3, Clock, Shield, Zap } from "lucide-react";
import collaborationImg from "@/assets/feature-collaboration.jpg";
import tasksImg from "@/assets/feature-tasks.jpg";
import analyticsImg from "@/assets/feature-analytics.jpg";
import { useInView } from "@/hooks/useInView";

const mainFeatures = [
  {
    icon: Users,
    title: "Colaboração em Tempo Real",
    description: "Trabalhe junto com sua equipe em projetos, compartilhe arquivos e mantenha todos alinhados.",
    image: collaborationImg,
  },
  {
    icon: Target,
    title: "Gestão Inteligente de Tarefas",
    description: "Organize tarefas, defina prioridades e acompanhe o progresso com kanban boards intuitivos.",
    image: tasksImg,
  },
  {
    icon: BarChart3,
    title: "Relatórios e Analytics",
    description: "Visualize métricas de produtividade, identifique gargalos e otimize seus processos.",
    image: analyticsImg,
  },
];

const additionalFeatures = [
  {
    icon: Clock,
    title: "Controle de Tempo",
    description: "Track de tempo automático para projetos e tarefas",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Seus dados protegidos com criptografia de ponta",
  },
  {
    icon: Zap,
    title: "Integrações",
    description: "Conecte com suas ferramentas favoritas",
  },
];

export const Features = () => {
  const [ref, isInView] = useInView();
  
  return (
    <section 
      ref={ref}
      className={`py-24 bg-gradient-card transition-all duration-1000 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tudo que Você Precisa em
            <span className="block text-primary">Uma Só Plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simplifique o gerenciamento de projetos com ferramentas poderosas e intuitivas
          </p>
        </div>
        
        {/* Main features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Feature image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-white/40 backdrop-blur-sm border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
