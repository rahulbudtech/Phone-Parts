import { ArrowRight } from "lucide-react";
import RepairRequestForm from "@/components/RepairRequestForm";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import CTAPanel from "@/components/CTAPanel";
import DetailedServices from "@/components/DetailedServices";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <div className="relative w-full min-h-[580px] md:min-h-[640px] lg:min-h-[700px] py-16 md:py-20 lg:py-24 flex items-center bg-[#0c223a] overflow-hidden">
        {/* Mobile Background Image */}
        <div 
          className="absolute inset-0 z-0 block md:hidden"
          style={{
            backgroundImage: "url('/mobile banner.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[#061626]/70"></div>
        </div>

        {/* Desktop Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            backgroundImage: "url('/background banner.webp')",
            backgroundPosition: "right center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#061626] from-25% via-[#061626]/60 via-50% to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center h-full">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Need Your Phone or Laptop Repaired?
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
              From cracked screens and battery problems to charging issues and more, our local technicians provide fast, reliable phone, tablet and laptop repairs in Invercargill.
            </p>

            {/* CTA Button */}
            <a 
              href="#inquire" 
              className="bg-[#007aff] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center shadow-lg group"
            >
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Features Strip */}
      <FeaturesStrip />
      
      {/* Repair Request Form Section */}
      <RepairRequestForm />
      
      {/* How it works Section */}
      <HowItWorks />
      

      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Brands Section */}
      <BrandsSection />
      
      {/* Call To Action Panel */}
      <CTAPanel />
      
      {/* Detailed Services */}
      <DetailedServices />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Location Section */}
      <LocationSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
    
     
    </main>
  );
}
