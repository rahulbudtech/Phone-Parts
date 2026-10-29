import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-[#0c223a] w-full">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex justify-between items-center text-white text-xs py-2">
          <div className="flex items-center space-x-1 md:space-x-2 md:ml-[130px]">
            <Phone size={12} className="md:w-[14px] md:h-[14px]" />
            <span className="text-[10px] sm:text-[11px] md:text-xs">+03 242 0 424</span>
          </div>
          <div className="flex items-center md:mr-[180px]">
            <div className="flex items-center space-x-1 md:space-x-2">
              <MapPin size={12} className="md:w-[14px] md:h-[14px]" />
              <span className="text-[10px] sm:text-[11px] md:text-xs">Shop 3, 24 Leven St<span className="hidden sm:inline">, Invercargill</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b py-3 md:py-4 px-4 md:px-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Phone Parts & Accessories" className="h-12 w-auto md:h-14 object-contain" />
        </Link>

        {/* Nav Links & Button */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <Link href="/#services" className="hover:text-[#007aff]">Repairs</Link>
            <Link href="/#how-it-works" className="hover:text-[#007aff]">How it works</Link>
            <Link href="/#why-us" className="hover:text-[#007aff]">Why us</Link>
            <Link href="/#contact" className="hover:text-[#007aff]">Contact</Link>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-3">
            <a 
              href="https://www.google.com/maps/place/Shop+3%2F24+Leven+Street,+Invercargill+9810,+New+Zealand/@-46.410679,168.3426901,17z/data=!3m1!4b1!4m6!3m5!1s0xa9d2c49c71b8ae05:0x27f857e1f12da776!8m2!3d-46.410679!4d168.345265!16s%2Fg%2F11nq8t1hc3?authuser=0&entry=ttu" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#007aff] hover:bg-blue-600 text-white p-2.5 rounded-md flex items-center justify-center transition-colors shadow-sm" 
              aria-label="Get directions"
            >
              <MapPin size={20} className="text-white" />
            </a>
            <a 
              href="tel:+6432420424" 
              className="bg-[#007aff] hover:bg-blue-600 text-white p-2.5 rounded-md flex items-center justify-center transition-colors shadow-sm" 
              aria-label="Call us now"
            >
              <Phone size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
