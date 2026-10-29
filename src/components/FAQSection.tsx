"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How much do repairs cost?",
      answer: " Repairs start from $59, depending on the device and repair required."
    },
    {
      question: "How quickly can you repair my phone?",
      answer: "Many common repairs can be completed within 45 minutes."
    },
    {
      question: "Do you offer laptop repairs?",
      answer: "Yes. We repair laptops and computers as well as phones and tablets."
    },
    {
      question: "Can I send my device by courier?",
      answer: " Yes. Courier repair is available if you cannot visit our Invercargill store."
    },
     {
      question: "Do you offer a repair warranty?",
      answer: "  Warranty coverage depends on the repair and replacement part. Our team can explain the applicable warranty before proceeding."
    },
    
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[oklch(0.965_0.035_230)] w-full py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Side: Header */}
        <div className="lg:col-span-4 flex flex-col pt-2 text-center lg:text-left items-center lg:items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c223a]">
            Frequently Asked<br className="hidden lg:block" /> Questions
          </h2>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-8 flex flex-col w-full border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-gray-200 py-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[#0c223a] font-bold text-base">{faq.question}</h3>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-[#007aff]" />
                  ) : (
                    <ChevronDown size={20} className="text-[#007aff]" />
                  )}
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
