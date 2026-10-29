"use client";
import { useEffect, useRef } from "react";

export default function BrandsSection({ className = "" }: { className?: string }) {
  const brands = [
    {
      name: "Apple",
      logo: "/apple.png",
      description: "iPhone screen repairs, battery replacements, charging repairs and MacBook repairs in Invercargill, plus iPad and Apple Watch repairs.",
    },
    {
      name: "Samsung",
      logo: "/samsung.png",
      description: "Samsung Galaxy screen repairs, battery replacements and charging repairs in Invercargill, including Galaxy S, A and Tab devices..",
    },
    {
      name: "Oppo",
      logo: "/oppo.png",
      description: "Oppo screen, battery, camera and charging repairs for popular Find and Reno models, with professional repair service in Invercargill.",
    },
    {
      name: "Nokia",
      logo: "/nokia.png",
      description: "Nokia phone and tablet repairs covering screen, battery, charging and common hardware issues across supported models.",
    },
    {
      name: "Google",
      logo: "/google.png",
      description: "Google Pixel screen repairs, battery replacements and charging repairs, with professional service and clear quotes.",
    },
    {
      name: "Microsoft",
      logo: "/microsoft.png",
      description: "Surface and Surface Laptop repairs covering screens, batteries, keyboards and other hardware issues.",
    },
    {
      name: "Lenovo",
      logo: "/lenovo.png",
      description: "Lenovo ThinkPad, IdeaPad and Yoga repairs covering screens, batteries, charging issues and common hardware faults.",
    },
    {
      name: "Dell",
      logo: "/dell.png",
      description: "Dell XPS, Inspiron and laptop repairs covering screen replacement, battery issues, charging problems and hardware faults.",
    }
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

  const row1 = Array(10).fill(brands.slice(0, 4)).flat();
  const row2 = Array(10).fill(brands.slice(4, 8)).flat();

  interface BrandItem {
    name: string;
    logo: string;
    description: string;
  }

  const BrandCard = ({ brand, index }: { brand: BrandItem, index: number }) => (
    <div 
      className={`flex-none w-[85vw] snap-center flex flex-col bg-white rounded-2xl border border-[#007aff]/30 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#007aff] transition-all duration-300 p-10 items-center text-center cursor-default group ${index >= 4 ? 'md:hidden' : 'md:flex md:w-auto'}`}
    >
      <div className="h-20 w-full flex items-center justify-center mb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.nextElementSibling) {
              (target.nextElementSibling as HTMLElement).style.display = 'block';
            }
          }}
        />
        <span className="font-bold text-2xl text-[#0c223a] hidden group-hover:scale-105 transition-transform duration-500 ease-in-out">{brand.name}</span>
      </div>
      <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">
        {brand.description}
      </p>
    </div>
  );

  return (
    <section className={`bg-white w-full py-12 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c223a] mb-6">
            Device Repairs Across Major Brands
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            From iPhone screen repairs and Samsung battery replacements to MacBook, laptop and PC repairs in Invercargill, our repair team works with a wide range of major phone, tablet, laptop and computer brands, including Apple, Samsung, Lenovo, HP and Dell. We handle everything from screen replacements, battery replacements and charging issues to back glass repairs and other hardware faults.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full">
          {/* Row 1 */}
          <div 
            ref={scrollRef1}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-2 pt-2 px-2 -mx-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:snap-none md:pb-0 md:pt-0 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {row1.map((brand, index) => (
              <BrandCard key={`r1-${index}`} brand={brand} index={index} />
            ))}
          </div>

          {/* Row 2 */}
          <div 
            ref={scrollRef2}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4 pt-2 px-2 -mx-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:snap-none md:pb-0 md:pt-0 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {row2.map((brand, index) => (
              <BrandCard key={`r2-${index}`} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
