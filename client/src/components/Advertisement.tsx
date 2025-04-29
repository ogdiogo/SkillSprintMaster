import React from 'react';

const Advertisement = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-[#d4af37]/30">
        <div className="bg-gradient-to-r from-[#113457] to-[#1a4878] p-6 sm:p-10">
          <div className="absolute top-0 right-0 px-3 py-1 bg-[#d4af37] text-[#113457] text-xs font-bold tracking-wider uppercase">
            Publicidade
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#f5f5dc]">
                Nova Coleção de Tote Bags Marc Jacobs
              </h3>
              <p className="text-[#f5f5dc]/90 mb-6">
                Descubra o equilíbrio perfeito entre estilo e funcionalidade com a nova 
                coleção de Tote Bags da Marc Jacobs. Elegante, espaçosa e ideal para 
                o dia a dia ou ocasiões especiais.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mr-2"></div>
                  <p className="text-[#f5f5dc]/80">Material premium de alta durabilidade</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mr-2"></div>
                  <p className="text-[#f5f5dc]/80">Design atemporal e versátil</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mr-2"></div>
                  <p className="text-[#f5f5dc]/80">Compartimentos para organização perfeita</p>
                </div>
              </div>
              <button className="mt-8 px-6 py-3 bg-[#d4af37] text-[#113457] font-bold rounded-md hover:bg-[#b8860b] transition-colors shadow-md">
                Comprar Agora
              </button>
            </div>
            
            <div className="relative">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-[#d4af37]/30">
                <div className="absolute -top-3 -right-3 bg-[#d4af37] text-[#113457] text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center transform rotate-12">
                  <div className="transform -rotate-12">Nova!</div>
                </div>
                <div className="p-4 bg-[#f5f5dc]/10 rounded-lg border border-[#d4af37]/20">
                  <h4 className="text-xl font-bold mb-3 text-[#d4af37]">The Leather Tote</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-[#d4af37] mr-2">✓</span>
                      <span className="text-[#f5f5dc]/90">Couro genuíno importado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4af37] mr-2">✓</span>
                      <span className="text-[#f5f5dc]/90">Alças reforçadas e confortáveis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4af37] mr-2">✓</span>
                      <span className="text-[#f5f5dc]/90">Bolsos com zíper seguros</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4af37] mr-2">✓</span>
                      <span className="text-[#f5f5dc]/90">Forro interno premium</span>
                    </li>
                  </ul>
                  <div className="text-center pt-3 border-t border-[#d4af37]/20">
                    <p className="text-[#f5f5dc]/70 text-sm mb-1">Preço especial</p>
                    <p className="text-[#d4af37] text-2xl font-bold">€ 399</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;