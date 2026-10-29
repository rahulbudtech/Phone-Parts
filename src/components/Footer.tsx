import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#041424] w-full pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 mb-6">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col col-span-2 md:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-4 inline-block">
              <img src="/logo.png" alt="Phone Parts & Accessories" className="h-10 w-auto bg-white p-1.5 rounded-md" />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Reliable repairs for the devices you rely on every day.
            </p>
          </div>

          {/* Column 2: Visit Us */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm mb-2">Visit us</h4>
            <a 
              href="https://www.google.com/maps/place/Shop+3%2F24+Leven+Street,+Invercargill+9810,+New+Zealand/@-46.410679,168.3426901,17z/data=!3m1!4b1!4m6!3m5!1s0xa9d2c49c71b8ae05:0x27f857e1f12da776!8m2!3d-46.410679!4d168.345265!16s%2Fg%2F11nq8t1hc3?authuser=0&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col space-y-1 text-gray-400 text-xs hover:text-white transition-colors"
            >
              <p>Shop 3, 24 Leven Street</p>
              <p>Invercargill 9810</p>
              <p>Open 7 Days</p>
            </a>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm mb-2">Talk to a technician</h4>
            <div className="flex flex-col space-y-1 text-gray-400 text-xs">
              <a href="tel:+6432420424" className="hover:text-white transition-colors">+64 3 242 0424</a>
              <a href="mailto:info@phoneparts.co.nz" className="hover:text-white transition-colors">info@phoneparts.co.nz</a>
            </div>
          </div>
          
        </div>

        {/* Bottom Border & Copyright */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-[10px]">
            &copy; 2026 Phone Parts & Accessories. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
