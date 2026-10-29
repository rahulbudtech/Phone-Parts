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
  title: "Mac & Laptop Repairs in Invercargill | Phone Parts & Accessories",
  description: "Expert MacBook, Apple, Dell, HP, Lenovo laptop repair in Invercargill. Screen replacements, battery fixes, keyboard repairs and hardware troubleshooting.",
};

export default function MacLaptopRepairsPage() {
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
              Mac & Laptop Repairs in Invercargill
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
              Laptop or MacBook not working properly? Our technicians handle screen replacements, battery issues, keyboard faults, charging problems, and hardware diagnostics in Invercargill.
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
            Mac & Laptop Repairs
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto [text-wrap:pretty]">
            If your MacBook battery drains in an hour, your laptop screen is cracked or the keyboard has stopped responding, our Mac and laptop repairs in Invercargill can get you back up and running. We repair MacBook Air and MacBook Pro models, plus Windows laptops from HP, Dell, Lenovo, Asus and Microsoft Surface. Common jobs include screen replacement, battery replacement, keyboard and trackpad repairs, charging port fixes, hinge repairs, overheating and slow performance. Our technicians diagnose the real fault before quoting, so you only pay for what actually needs fixing. All eligible repairs are covered by a 12-month warranty, and our price match guarantee applies&nbsp;to&nbsp;every&nbsp;quote.
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
