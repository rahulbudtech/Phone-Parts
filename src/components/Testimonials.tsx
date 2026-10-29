"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My phone screen was replaced the same afternoon and it looks brand new. The quote was clear from the start.",
      name: "Maya R.",
      service: "iPhone screen repair"
    },
    {
      quote: "They recovered years of family photos from a laptop I thought was gone. Professional, patient and honest.",
      name: "Daniel K.",
      service: "Laptop data recovery"
    },
    {
      quote: "Quick diagnosis, regular updates and no surprise charges. I would confidently use Phone Parts again.",
      name: "Priya S.",
      service: "Samsung charging repair"
    }
  ];

  const infiniteTestimonials = Array(10).fill(testimonials).flat();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    let isInteracting = false;
    const pause = () => (isInteracting = true);
    const play = () => (isInteracting = false);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", play);
    container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", play);

    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return;
      if (isInteracting) return;
      
      const scrollAmount = window.innerWidth * 0.85 + 16;
      
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollTo({ left: 0 });
        container.style.scrollBehavior = 'smooth';
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => {
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", play);
      clearInterval(interval);
    };
  }, []);
  return (
    <section id="why-us" className="bg-[#041424] w-full py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Why Choose Phone Parts & Accessories?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Real experiences from customers who’ve trusted us with their devices.
          </p>
        </div>

        {/* Testimonials Grid / Slider */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4 pt-2 px-2 -mx-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:pt-0 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <div key={index} className={`flex-none w-[85vw] snap-center flex flex-col bg-[#162a43] rounded-xl border border-gray-700/50 p-8 shadow-lg ${index >= testimonials.length ? 'md:hidden' : 'md:flex md:w-auto'}`}>
              
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-[#00aaff] fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-700/50 mb-6"></div>
              
              {/* Author Info */}
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-sm mb-1">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs">{testimonial.service}</p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
