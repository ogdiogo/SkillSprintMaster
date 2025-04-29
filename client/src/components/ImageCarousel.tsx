import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Edifício de banco com arquitetura clássica"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Profissionais bancários em reunião"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Conceito de investimento e crescimento financeiro"
  }
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };
  
  return (
    <section className="relative bg-blue-950 overflow-hidden">
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-blue-950/70"></div>
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button 
            onClick={goToPrevious}
            className="bg-blue-950/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-900/70 transition-colors border border-amber-600/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext}
            className="bg-blue-950/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-900/70 transition-colors border border-amber-600/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-amber-500' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;