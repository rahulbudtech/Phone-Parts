import { Phone, Package, Wrench, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[oklch(0.965_0.035_230)] w-full py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c223a] mb-3">
            How Our Repair Service Works
          </h2>
          <p className="text-gray-500 text-sm">
            Four clear steps, with updates throughout your repair.
          </p>
        </div>

        {/* Steps */}
        <div className="w-full relative grid grid-cols-2 gap-y-12 md:flex md:flex-row md:gap-y-0 items-start justify-between z-0">
          
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-gray-300 -z-10"></div>

          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-4">
            <div className="relative w-16 h-16 bg-[#007aff] rounded-full flex items-center justify-center text-white mb-5 shadow-md">
              <Phone size={24} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#0c223a] rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[oklch(0.965_0.035_230)]">
                1
              </div>
            </div>
            <h3 className="text-[#0c223a] font-bold text-sm sm:text-base mb-1">Request a quote</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
              Looking for reliable phone repair at competitive prices? Simply fill out our form to get a quick estimate
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-4">
            <div className="relative w-16 h-16 bg-[#007aff] rounded-full flex items-center justify-center text-white mb-5 shadow-md">
              <Package size={24} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#0c223a] rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[oklch(0.965_0.035_230)]">
                2
              </div>
            </div>
            <h3 className="text-[#0c223a] font-bold text-sm sm:text-base mb-1">Send Your Device</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
              Package your phone safely and ship it to our repair center using your preferred carrier or our prepaid label.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-4">
            <div className="relative w-16 h-16 bg-[#007aff] rounded-full flex items-center justify-center text-white mb-5 shadow-md">
              <Wrench size={24} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#0c223a] rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[oklch(0.965_0.035_230)]">
                3
              </div>
            </div>
            <h3 className="text-[#0c223a] font-bold text-sm sm:text-base mb-1">Track Your Repair</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
              Stay informed every step of the way. With Phone Parts NZ, you’ll receive real-time updates on your device repair status.

            </p>
          </div>

          {/* Step 4 */}
          <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-4">
            <div className="relative w-16 h-16 bg-[#007aff] rounded-full flex items-center justify-center text-white mb-5 shadow-md">
              <CheckCircle2 size={24} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#0c223a] rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[oklch(0.965_0.035_230)]">
                4
              </div>
            </div>
            <h3 className="text-[#0c223a] font-bold text-sm sm:text-base mb-1">Pickup Repaired Device</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
              Your device is ready! Visit Phone Parts NZ to collect your fully repaired phone.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
