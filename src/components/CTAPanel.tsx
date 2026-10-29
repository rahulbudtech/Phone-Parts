import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export default function CTAPanel() {
  return (
    <section className="bg-[oklch(0.965_0.035_230)] w-full py-14 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col md:items-start max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c223a] mb-3">
            Talk to a Repair Expert
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Have questions about your device? Speak with our team and get advice on your repair.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
          <Link 
            href="/#inquire" 
            className="bg-[#007aff] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto"
          >
            <FileText size={18} className="mr-2" />
            Get a Quote
          </Link>
          <a 
            href="tel:+6432420424" 
            className="bg-white border-2 border-[#007aff] text-[#007aff] hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto"
          >
            <Phone size={18} className="mr-2" />
            Call Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
