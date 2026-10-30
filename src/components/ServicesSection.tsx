"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Smartphone Repairs",
      description: " We repair common iPhone, Samsung and other smartphone issues, including screens, batteries and charging.",
      image: "/phone.webp",
      link: "/smartphone-repairs"
    },
    {
      title: "Mac & Laptop Repairs",
      description: " Laptop or MacBook not working properly? We handle screen, battery, keyboard, charging and performance issues.",
      image: "/mac.webp",
      link: "/mac-laptop-repairs"
    },
    {
      title: "iPad & Tablet Repairs",
      description: "We repair iPads and tablets with cracked screens, battery problems, charging faults and other common issues.",
      image: "/ipad.webp",
      link: "/ipad-tablet-repairs"
    },
    {
      title: "PC & Computer Repairs",
      description: " Get help with slow computers, hardware problems, software issues, upgrades and more.",
      image: "/computer repaire.webp",
      link: "/pc-computer-repairs"
    }
  ];

  const infiniteServices = Array(10).fill(services).flat();

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

    const scrollInterval = setInterval(() => {
      // Only auto-scroll on mobile view
      if (window.innerWidth >= 768) return;
      if (isInteracting) return;
      
      // Calculate approximately one card width plus gap
      const scrollAmount = window.innerWidth * 0.85 + 24; 
      
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollTo({ left: 0 });
        container.style.scrollBehavior = 'smooth';
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", play);
    };
  }, []);

  return (
    <section id="services" className="bg-white w-full py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-8">
        
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c223a] mb-4">
            Repairs For The Devices You Use Every Day
          </h2>
        </div>

        {/* Services Container: Slider on mobile, Grid on desktop */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-8 pt-4 -mt-4 px-2 -mx-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:snap-none md:pb-0 md:pt-0 md:mt-0 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {infiniteServices.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className={`flex-none w-[85vw] snap-center flex flex-col bg-white rounded-2xl border border-[#007aff]/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#007aff] transition-all duration-300 ease-in-out cursor-pointer group ${index >= services.length ? 'md:hidden' : 'md:flex md:w-auto'}`}
            >
              {/* Image Container */}
              <div className="relative w-full h-60 bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[#0c223a] font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto bg-[#007aff] text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center w-full shadow-sm group-hover:bg-blue-600">
                  <span>Read more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
