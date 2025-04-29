import { Button } from "@/components/ui/button";
import { Shield, CreditCard, Landmark } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-banking text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Soluções Bancárias Com Excelência e Confiança</h1>
            <p className="text-blue-100 text-lg mb-8">FinanceBanco oferece serviços bancários personalizados para indivíduos e empresas com segurança, transparência e comprometimento.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="px-6 py-6 bg-accent text-accent-foreground font-semibold rounded-md shadow-lg hover:bg-accent/90 transition">
                Conheça Nossos Serviços
              </Button>
              <Button variant="outline" className="px-6 py-6 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition">
                Fale Conosco
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Moderna sede do banco" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Segurança Garantida</p>
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                  <CreditCard className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Transações Rápidas</p>
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Landmark className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Serviços Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
