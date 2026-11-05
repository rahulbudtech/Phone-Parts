"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function DetailedServices() {
  const services = [
    {
      image: "/screen repaire.webp",
      title: "Screen Replacement",
      description: "Cracked, broken or unresponsive screens? We can assess your device and advise on the appropriate screen repair.",
    },
    {
      image: "/battery repaire.webp",
      title: "Battery Replacement",
      description: "If your battery drains quickly, won't hold charge or shuts down unexpectedly, a battery replacement may help.",
    },
    {
      image: "/charging repaire.webp",
      title: "Charging Repairs",
      description: "Having trouble charging your device? We can diagnose charging and port-related issues.",
    },
    {
      image: "/liquid damage.webp",
      title: "Water & Liqud Damage",
      description: "Liquid damage can affect multiple components. Bring your device in as soon as possible for an assessment.",
    },
    {
      image: "/Software Support.webp",
      title: "Software Issues",
      description: "Slow performance, crashes, update problems and other software issues can often be diagnosed and resolved.",
    },
    {
      image: "/camera-and-audio.webp",
      title: "Camera & Audio Repairs",
      description: "Problems with cameras, microphones, speakers or other components can affect everyday use. We can assess the fault.",
    },
    {
      image: "/board repaire.webp",
      title: "Other Hardware Repairs",
      description: "From damaged components to unexpected hardware faults, our technicians can assess the issue and advise on your options.",
    },
    {
      image: "/data-and-device-support.webp",
      title: "Data & Device Support",
      description: "Need help accessing, transferring or recovering important data? Ask our team what support is available for your device.",
    },
  ];

  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container1 = scrollRef1.current;
    const container2 = scrollRef2.current;
    if (!container1 || !container2) return;

    let isInteracting = false;
    const pause = () => (isInteracting = true);
    const play = () => (isInteracting = false);

    const attachEvents = (el: HTMLElement) => {
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", play);
      el.addEventListener("touchstart", pause, { passive: true });
      el.addEventListener("touchend", play);
    };

    const detachEvents = (el: HTMLElement) => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", play);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", play);
    };

    attachEvents(container1);
    attachEvents(container2);

    const scrollContainer = (container: HTMLDivElement) => {
      const scrollAmount = window.innerWidth * 0.85 + 16;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollTo({ left: 0 });
        container.style.scrollBehavior = 'smooth';
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return;
      if (isInteracting) return;
      
      scrollContainer(container1);
      scrollContainer(container2);
    }, 3000);

    return () => {
      detachEvents(container1);
      detachEvents(container2);
      clearInterval(interval);
    };
  }, []);

  const row1 = Array(10).fill(services.slice(0, 4)).flat();
  const row2 = Array(10).fill(services.slice(4, 8)).flat();

  return (
    <section className="bg-white w-full py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c223a] mb-4">
            Repair Services We Offer
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
           Our technicians handle a wide range of phone, laptop, tablet and computer repairs, including screen replacements, battery issues, charging problems, software faults, water damage and other common hardware issues. 
          </p>
        </div>

        {/* Services Grid (Split into two rows for independent mobile scrolling) */}
        <div className="flex flex-col gap-4 md:gap-6 w-full">
          {/* Row 1 */}
          <div 
            ref={scrollRef1}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-2 pt-2 px-2 -mx-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:pt-0 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {row1.map((service, index) => (
              <div key={index} className={`flex-none w-[85vw] snap-center flex flex-col bg-white rounded-1xl border border-[#007aff]/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#007aff] transition-all duration-300 group cursor-pointer ${index >= 4 ? 'md:hidden' : 'md:flex md:w-auto'}`}>
                {/* Image Container */}
                <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[#0c223a] font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    href={`/?issue=${encodeURIComponent(service.title)}#inquire`}
                    className="mt-auto bg-[#007aff] hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors flex items-center justify-center w-full"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div 
            ref={scrollRef2}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4 pt-2 px-2 -mx-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:pt-0 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {row2.map((service, index) => (
              <div key={index} className={`flex-none w-[85vw] snap-center flex flex-col bg-white rounded-1xl border border-[#007aff]/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#007aff] transition-all duration-300 group cursor-pointer ${index >= 4 ? 'md:hidden' : 'md:flex md:w-auto'}`}>
                {/* Image Container */}
                <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[#0c223a] font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    href={`/?issue=${encodeURIComponent(service.title)}#inquire`}
                    className="mt-auto bg-[#007aff] hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors flex items-center justify-center w-full"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
