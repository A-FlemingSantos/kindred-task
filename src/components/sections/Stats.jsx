const stats = [
  {
    number: "1000+",
    label: "Equipes Ativas",
    description: "Pequenas equipes usando nossa plataforma",
  },
  {
    number: "50K+",
    label: "Projetos Concluídos",
    description: "Projetos finalizados com sucesso",
  },
  {
    number: "98%",
    label: "Satisfação",
    description: "Taxa de satisfação dos usuários",
  },
  {
    number: "24/7",
    label: "Suporte",
    description: "Assistência sempre disponível",
  },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados que Falam por Si
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Junte-se a milhares de equipes que já transformaram sua produtividade
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-white block">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
