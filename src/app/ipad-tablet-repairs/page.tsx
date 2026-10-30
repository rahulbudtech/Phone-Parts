import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FeaturesStrip from "@/components/FeaturesStrip";
// import HowItWorks from "@/components/HowItWorks";
import BrandsSection from "@/components/BrandsSection";
import CTAPanel from "@/components/CTAPanel";
import DetailedServices from "@/components/DetailedServices";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iPad & Tablet Repairs in Invercargill | Phone Parts & Accessories",
  description: "Fast, trusted iPad and tablet repair in Invercargill. Screen replacements, battery fixes, and charging port repair for Apple iPad and Samsung Galaxy Tab.",
};

export default function IpadTabletRepairsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* Cover Banner */}
      <div className="relative w-full min-h-[540px] md:min-h-[580px] lg:min-h-[640px] py-16 md:py-20 lg:py-24 flex items-center bg-[#0c223a] md:bg-[#eaf4fe] overflow-hidden">
        {/* Mobile Background Image */}
        <div 
          className="absolute inset-0 z-0 block md:hidden"
          style={{
            backgroundImage: "url('/ipad-banner-mobile.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[#061626]/75"></div>
        </div>

        {/* Desktop Background Image with Responsive Contrast */}
        <div 
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            backgroundImage: "url('/ipad-banner-desktop.webp')",
            backgroundPosition: "right center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:block lg:hidden hidden"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center h-full">
          <div className="max-w-md lg:max-w-xl text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white md:text-[#0c223a] leading-tight mb-6">
              iPad &amp; Tablet Repairs in Invercargill
            </h1>

            {/* Subheading */}
            <p className="text-gray-200 md:text-gray-700 text-base md:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
              We repair Apple iPads and Android tablets with cracked screens, failing batteries, charging faults, and hardware damage with precision and quality parts in Invercargill.
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
            iPad & Tablet Repairs
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto [text-wrap:pretty]">
            A cracked iPad screen doesn’t mean it’s time for a new one. We handle iPad repairs and tablet repairs in Invercargill for all iPad models, Samsung Galaxy Tab, Microsoft Surface and other popular tablets. Our technicians replace shattered screens and glass, swap tired batteries, repair charging ports and fix buttons, speakers and cameras. Whether it’s the family iPad that’s been dropped one too many times or a work tablet that needs to be back on the job quickly, we’ll give you a clear quote upfront and use quality parts backed by a 12-month warranty.
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
