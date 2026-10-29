import { Clock, Smartphone, BadgeCheck, Tag } from "lucide-react";

export default function FeaturesStrip() {
  const features = [
    {
      icon: <Clock size={24} className="text-[#007aff]" />,
      title: "45 Minutes Expert Repairs",
      description: "Most fixes completed while you wait",
    },
    {
      icon: <Smartphone size={24} className="text-[#007aff]" />,
      title: "All Major Brands Covered",
      description: "Apple, Samsung, PC and more",
    },
    {
      icon: <BadgeCheck size={24} className="text-[#007aff]" />,
      title: "Certified Quality Parts",
      description: "Premium components for every fix",
    },
    {
      icon: <Tag size={24} className="text-[#007aff]" />,
      title: "Price Match Guaranteed",
      description: "We won't be beaten on local prices",
    },
  ];

  return (
    <section className="bg-[oklch(0.965_0.035_230)] w-full py-4 md:py-8 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        

        <div className="grid grid-cols-2 gap-y-5 gap-x-2 md:flex md:flex-row items-center md:divide-x divide-gray-200 w-full justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-3 px-1 sm:px-8 py-1 md:py-0">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#0c223a] font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-tight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
