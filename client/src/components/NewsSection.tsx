import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "FinanceBanco Lança Novo Programa de Investimentos Sustentáveis",
    date: "15 de Abril, 2025",
    description: "Conheça nosso novo programa de investimentos focado em empresas com práticas ambientais e sociais responsáveis.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Investimentos Sustentáveis",
    category: "Investimentos"
  },
  {
    id: 2,
    title: "Novas Medidas de Segurança para Transações Online",
    date: "02 de Abril, 2025",
    description: "Implementamos novas tecnologias de autenticação em duas etapas para garantir a segurança de suas operações bancárias online.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Segurança Digital",
    category: "Segurança"
  },
  {
    id: 3,
    title: "FinanceBanco Expande Rede de Agências no Interior",
    date: "18 de Março, 2025",
    description: "Inauguramos cinco novas agências no interior do país para estar mais próximos de nossos clientes em áreas em crescimento.",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Novas Agências",
    category: "Expansão"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notícias e Atualizações</h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Ver todas as notícias
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="h-52 w-full object-cover" 
                />
                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarClock className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                  Leia mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
