interface TeamMember {
  id: number;
  name: string;
  title: string;
  content: string[];
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. António Rodrigues",
    title: "Presidente & Fundador",
    content: [
      "O Dr. António Rodrigues tem mais de 30 anos de experiência no sector financeiro internacional. Formado em Economia pela Universidade de Lisboa e com doutoramento em Finanças pela London School of Economics.",
      "Antes de fundar os Glosadores e Associados em 2005, ocupou cargos de direção em diversas instituições bancárias na Europa e América Latina. É reconhecido pela sua visão estratégica e compromisso com a excelência."
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Dr. António Rodrigues"
  },
  {
    id: 2,
    name: "Dra. Mariana Santos",
    title: "Diretora de Operações Financeiras",
    content: [
      "A Dra. Mariana Santos juntou-se à nossa equipa em 2010, trazendo consigo uma vasta experiência em operações bancárias e gestão de riscos. Formada em Gestão pelo ISCTE com MBA pela INSEAD.",
      "Sob a sua liderança, implementámos sistemas financeiros inovadores que melhoraram significativamente a segurança e eficiência das nossas operações, sempre mantendo o foco na satisfação dos nossos clientes."
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Dra. Mariana Santos"
  },
  {
    id: 3,
    name: "Dr. Carlos Mendes",
    title: "Diretor de Investimentos",
    content: [
      "O Dr. Carlos Mendes é responsável pela estratégia de investimentos do banco desde 2012. Com formação em Matemática Aplicada pela Universidade do Porto e especialização em Mercados Financeiros pela Universidade de Chicago.",
      "A sua análise criteriosa e abordagem equilibrada entre risco e retorno tem permitido oferecer aos nossos clientes oportunidades de investimento consistentes e de qualidade superior, mesmo em períodos de volatilidade nos mercados."
    ],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Dr. Carlos Mendes"
  },
  {
    id: 4,
    name: "Dra. Sofia Almeida",
    title: "Diretora de Relações Internacionais",
    content: [
      "A Dra. Sofia Almeida coordena as nossas relações com instituições financeiras internacionais e clientes corporativos globais. Formada em Relações Internacionais pela Universidade Nova de Lisboa e com mestrado em Economia Internacional pela Sciences Po Paris.",
      "Com experiência prévia no Banco Mundial e em consultoria estratégica, a sua visão global e rede de contactos tem sido fundamental para a expansão internacional dos Glosadores e Associados."
    ],
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Dra. Sofia Almeida"
  },
  {
    id: 5,
    name: "Dr. Miguel Costa",
    title: "Diretor de Inovação e Tecnologia",
    content: [
      "O Dr. Miguel Costa lidera a nossa transformação digital e iniciativas de inovação bancária. Formado em Engenharia Informática pelo Instituto Superior Técnico e com MBA pelo MIT.",
      "A sua experiência em fintech e banca digital tem sido essencial para desenvolver soluções tecnológicas seguras que mantêm os Glosadores e Associados na vanguarda do sector bancário, combinando tradição com inovação responsável."
    ],
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Dr. Miguel Costa"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#081b33]">Sobre Nós</h2>
          <p className="mt-4 text-lg text-[#081b33]/70">Conheça mais sobre quem somos e nossa missão</p>
        </div>
        
        <div className="space-y-16">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-6 border border-[#d4af37]/10"
            >
              {/* Imagem sempre à esquerda */}
              <div className="md:w-1/2">
                <div className="bg-[#081b33]/5 rounded-lg overflow-hidden shadow-md border border-[#d4af37]/20">
                  <img 
                    src={member.image} 
                    alt={member.alt} 
                    className="w-full h-full object-cover" 
                    width="600" 
                    height="400"
                  />
                </div>
              </div>
              
              {/* Texto sempre à direita */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-2 text-[#081b33]">{member.name}</h3>
                <p className="text-[#d4af37] font-medium mb-4">{member.title}</p>
                {member.content.map((paragraph, index) => (
                  <p key={index} className="text-[#081b33]/80 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
