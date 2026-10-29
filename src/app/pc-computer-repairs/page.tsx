import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FeaturesStrip from "@/components/FeaturesStrip";

import BrandsSection from "@/components/BrandsSection";
import CTAPanel from "@/components/CTAPanel";
import DetailedServices from "@/components/DetailedServices";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PC & Computer Repairs in Invercargill | Phone Parts & Accessories",
  description: "Reliable desktop PC and computer repair services in Invercargill. Diagnostics, slow performance fixes, component replacement, and software support.",
};

export default function PcComputerRepairsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* Cover Banner */}
      <div className="relative w-full min-h-[580px] md:min-h-[640px] lg:min-h-[700px] py-16 md:py-20 lg:py-24 flex items-center bg-[#0c223a] overflow-hidden">
        {/* Mobile Background Image */}
        <div 
          className="absolute inset-0 z-0 block md:hidden"
          style={{
            backgroundImage: "url('/mobile banner.png')",
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
            backgroundImage: "url('/background banner.png')",
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
              PC & Computer Repairs in Invercargill
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
              Get expert help with slow computers, crashing systems, hardware upgrades, power supply issues, and software troubleshooting in Invercargill.
            </p>

            {/* CTA Button */}
            <Link 
              href="/#inquire" 
              className="bg-[#007aff] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center shadow-lg group"
            >
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Strip */}
      <FeaturesStrip />
      
      {/* Overview Paragraph Section */}
      <section className="bg-white w-full pt-10 md:pt-14 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c223a] mb-4">
            PC & Computer Repairs
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto [text-wrap:pretty]">
            When your desktop PC won’t start, runs painfully slow or keeps crashing, our PC and computer repairs in Invercargill find the cause and fix it properly. We repair desktops and all-in-one computers, covering hardware faults, hard drive and SSD replacements, RAM and storage upgrades, overheating, power supply issues, virus and malware removal, and Windows problems. If an older machine is struggling, an upgrade is often cheaper than replacing it, and we’ll tell you honestly which makes more sense. Our experienced local technicians keep pricing clear, with a price match guarantee on every quote and a 12-month warranty&nbsp;on&nbsp;eligible&nbsp;repairs.
          </p>
        </div>
      </section>
  
      {/* Call To Action Panel */}
      <CTAPanel />

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
