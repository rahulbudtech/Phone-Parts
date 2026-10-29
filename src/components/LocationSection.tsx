import { MapPin, Clock, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function LocationSection() {
  return (
    <section id="contact" className="bg-white w-full py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Card Container */}
        <div className="flex flex-col lg:flex-row w-full bg-white rounded-2xl border border-[#007aff]/30 shadow-lg overflow-hidden transition-all duration-300 hover:border-[#007aff]">
          
          {/* Left Side: Map */}
          <div className="w-full lg:w-3/5 h-[300px] lg:h-auto relative bg-gray-100">
            <iframe 
              src="https://www.google.com/maps?q=Shop+3/24+Leven+Street,+Invercargill+9810,+New+Zealand&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          
          {/* Right Side: Info */}
          <div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c223a] mb-6">
              Need a Mobile Repair in Invercargill? 
            </h2>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-2 w-full lg:flex lg:flex-col lg:gap-y-5 lg:gap-x-0 mb-8 text-xs sm:text-sm">
              
              {/* Address */}
              <div className="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4 text-left">
                <div className="lg:mt-1">
                  <MapPin size={20} className="text-[#007aff]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#0c223a] font-bold">Shop 3, 24 Leven St</p>
                  <p className="text-gray-500">Invercargill 9810, NZ</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col lg:flex-row items-end lg:items-start space-y-2 lg:space-y-0 lg:space-x-4 text-right lg:text-left">
                <div className="lg:mt-1">
                  <Mail size={20} className="text-[#007aff]" />
                </div>
                <div className="flex flex-col items-end lg:items-start">
                  <p className="text-[#0c223a] font-bold hidden lg:block">Email Us</p>
                  <a href="mailto:info@phoneparts.co.nz" className="text-[#007aff] hover:underline break-all">info@phoneparts.co.nz</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4 text-left">
                <div className="lg:mt-1">
                  <Phone size={20} className="text-[#007aff]" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[#0c223a] font-bold">+64 3 242 0424</p>
                  <p className="text-[#0c223a] font-bold">+64 3 568 8291</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col lg:flex-row items-end lg:items-start space-y-2 lg:space-y-0 lg:space-x-4 text-right lg:text-left">
                <div className="lg:mt-1">
                  <Clock size={20} className="text-[#007aff]" />
                </div>
                <div className="flex flex-col items-end lg:items-start w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2 lg:space-x-4 w-full">
                    <span className="font-semibold text-[#0c223a]">Weekdays</span>
                    <span className="text-gray-500">9:30am - 5:30pm</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2 lg:space-x-4 w-full mt-1">
                    <span className="font-semibold text-[#0c223a]">Weekends</span>
                    <span className="text-gray-500">10:00am - 5:00pm</span>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Button */}
            <Link 
              href="https://www.google.com/maps/place/Shop+3%2F24+Leven+Street,+Invercargill+9810,+New+Zealand/@-46.410679,168.3426901,17z/data=!3m1!4b1!4m6!3m5!1s0xa9d2c49c71b8ae05:0x27f857e1f12da776!8m2!3d-46.410679!4d168.345265!16s%2Fg%2F11nq8t1hc3?authuser=0&entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#007aff] hover:bg-blue-600 text-white font-semibold text-sm py-3 px-8 rounded-lg flex items-center justify-center w-fit mx-auto lg:mx-0 transition-colors group"
            >
              <span>Get directions</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
