"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown, Check, ArrowLeft } from "lucide-react";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function IssueParamReader({ onIssueChange }: { onIssueChange: (issue: string) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const issueParam = searchParams.get("issue");
    if (issueParam) {
      onIssueChange(issueParam);
      
      // Clean up the URL so a refresh doesn't auto-fill it again
      const url = new URL(window.location.href);
      url.searchParams.delete("issue");
      window.history.replaceState({}, "", url.toString());
    }
  }, [searchParams, onIssueChange]);
  return null;
}

export default function RepairRequestForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    issue: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    brand: false,
    model: false,
    issue: false,
    description: false,
    name: false,
    email: false,
    phone: false,
  });

  const handleIssueChange = useCallback((issue: string) => {
    setFormData((prev) => {
      if (prev.issue === issue) return prev;
      return { ...prev, issue };
    });
  }, []);

  const handleContinue = () => {
    if (step === 1) {
      const newErrors = { ...errors };
      newErrors.brand = !formData.brand;
      newErrors.model = !formData.model.trim();
      newErrors.issue = !formData.issue;
      newErrors.description = formData.description.trim().length < 10;
      setErrors(newErrors);

      if (!newErrors.brand && !newErrors.model && !newErrors.issue && !newErrors.description) {
        setStep(2);
      }
    } else if (step === 2) {
      const newErrors = { ...errors };
      newErrors.name = !formData.name.trim();
      newErrors.email = !formData.email.trim();
      newErrors.phone = !formData.phone.trim();
      setErrors(newErrors);

      if (!newErrors.name && !newErrors.email && !newErrors.phone) {
        setStep(3);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  if (step === 3) {
    return (
      <div className="bg-[#041424] w-full py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 rounded-full bg-[#007aff] text-white flex items-center justify-center shrink-0">
              <Check size={32} strokeWidth={2.5} />
            </div>
            
            <div className="flex flex-col">
              <p className="text-[#00aaff] font-bold text-xs tracking-widest uppercase mb-1">
                REQUEST READY
              </p>
              <h2 className="text-3xl font-bold text-white mb-1">
                Thanks, {formData.name}.
              </h2>
              <p className="text-gray-400 text-sm">
                A technician will contact you about your {formData.brand} repair.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => {
              setStep(1);
              setFormData({
                brand: "",
                model: "",
                issue: "",
                description: "",
                name: "",
                email: "",
                phone: "",
              });
            }}
            className="border border-gray-600 hover:border-gray-400 text-white font-medium text-sm py-3 px-6 rounded-md transition-colors"
          >
            Start another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="inquire" className="bg-[#041424] w-full py-12 relative">
      <Suspense fallback={null}>
        <IssueParamReader onIssueChange={handleIssueChange} />
      </Suspense>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column - Text Content */}
        <div className="lg:col-span-4 flex flex-col pt-8 lg:pt-[104px] text-center lg:text-left items-center lg:items-start">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Tell Us What’s Wrong <br className="hidden lg:block" /> We’ll Take It From There.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm lg:max-w-none">
            Give us a quick description of the problem and our repair team can help identify the next step. 
          </p>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-8 flex flex-col w-full max-w-2xl lg:ml-auto">
          
          {/* Progress Steps */}
          <div className="flex items-start justify-between w-full mb-12 relative z-0">
            {/* Connecting lines */}
            <div className="absolute top-4 left-[16.66%] right-[16.66%] h-[1px] bg-[#1e344d] -z-10">
              <div 
                className="h-full bg-[#007aff] transition-all duration-300" 
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              ></div>
            </div>
            
            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mb-2 ${step >= 1 ? 'bg-[#007aff] text-white' : 'bg-[#1e344d] text-gray-300'}`}>
                {step > 1 ? <Check size={16} strokeWidth={3} /> : "1"}
              </div>
              <span className={`text-center text-xs font-medium ${step === 1 ? 'text-[#00aaff]' : 'text-white'}`}>Problem & details</span>
            </div>
            
            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mb-2 ${step >= 2 ? 'bg-[#007aff] text-white' : 'bg-[#1e344d] text-gray-300'}`}>
                {step > 2 ? <Check size={16} strokeWidth={3} /> : "2"}
              </div>
              <span className={`text-center text-xs font-medium ${step === 2 ? 'text-[#00aaff]' : 'text-white'}`}>Contact info</span>
            </div>

            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mb-2 ${step >= 3 ? 'bg-[#007aff] text-white' : 'bg-[#1e344d] text-gray-300'}`}>
                3
              </div>
              <span className={`text-center text-xs font-medium ${step === 3 ? 'text-[#00aaff]' : 'text-white'}`}>Submit</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 w-full max-w-full overflow-hidden">
            
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Brand Select */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-white text-sm font-medium">Device brand</label>
                    <div className="relative">
                      <select 
                        value={formData.brand}
                        onChange={(e) => {
                          setFormData({...formData, brand: e.target.value});
                          if (errors.brand) setErrors({...errors, brand: false});
                        }}
                        className={`w-full bg-white text-gray-700 text-base py-3 px-4 rounded-md appearance-none outline-none focus:ring-2 focus:ring-[#007aff] ${errors.brand ? 'border-2 border-[#00aaff]' : ''}`}
                      >
                        <option value="" disabled hidden>Select brand</option>
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="oppo">Oppo</option>
                        <option value="vivo">Vivo</option>
                        <option value="asus">Asus</option>
                        <option value="nokia">Nokia</option>
                        <option value="microsoft">Microsoft</option>
                        <option value="other">Other brand</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                    {errors.brand && <span className="text-[#00aaff] text-[13px] font-medium">Choose a device</span>}
                  </div>

                  {/* Problem Select */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-white text-sm font-medium">Problem</label>
                    <div className="relative">
                      <select 
                        value={formData.issue}
                        onChange={(e) => {
                          setFormData({...formData, issue: e.target.value});
                          if (errors.issue) setErrors({...errors, issue: false});
                        }}
                        className={`w-full bg-white text-gray-700 text-base py-3 px-4 rounded-md appearance-none outline-none focus:ring-2 focus:ring-[#007aff] ${errors.issue ? 'border-2 border-[#00aaff]' : ''}`}
                      >
                        <option value="" disabled hidden>Select problem</option>
                        <option value="Screen Replacement">Screen Replacement</option>
                        <option value="Battery Replacement">Battery Replacement</option>
                        <option value="Charging Repairs">Charging Repairs</option>
                        <option value="Water & Liqud Damage">Water & Liqud Damage</option>
                        <option value="Software Issues">Software Issues</option>
                        <option value="Camera & Audio Repairs">Camera & Audio Repairs</option>
                        <option value="Other Hardware Repairs">Other Hardware Repairs</option>
                        <option value="Data & Device Support">Data & Device Support</option>
                        <option value="other">Other issue</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                    {errors.issue && <span className="text-[#00aaff] text-[13px] font-medium">Choose a problem</span>}
                  </div>
                </div>

                {/* Mobile Model Input */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Mobile model</label>
                  <input 
                    type="text"
                    value={formData.model}
                    onChange={(e) => {
                      setFormData({...formData, model: e.target.value});
                      if (errors.model) setErrors({...errors, model: false});
                    }}
                    className={`w-full bg-white text-gray-700 text-base py-3 px-4 rounded-md outline-none focus:ring-2 focus:ring-[#007aff] ${errors.model ? 'border-2 border-[#00aaff]' : ''}`}
                    placeholder="E.g., iPhone 13 Pro, Galaxy S21"
                  />
                  {errors.model && <span className="text-[#00aaff] text-[13px] font-medium">Enter your mobile model</span>}
                </div>

                {/* Textarea */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">What happened?</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({...formData, description: e.target.value});
                      if (errors.description && e.target.value.trim().length >= 10) setErrors({...errors, description: false});
                    }}
                    className={`w-full bg-white text-gray-700 text-base py-3 px-4 rounded-md outline-none focus:ring-2 focus:ring-[#007aff] min-h-[120px] resize-y ${errors.description ? 'border-2 border-[#00aaff]' : ''}`}
                    placeholder="Tell us what's wrong with your device"
                  ></textarea>
                  {errors.description && <span className="text-[#00aaff] text-[13px] font-medium">Add at least 10 characters</span>}
                </div>
              </>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if (errors.name && e.target.value.trim()) setErrors({...errors, name: false});
                    }}
                    placeholder="Your name" 
                    className={`w-full bg-white text-gray-700 text-base py-3 px-4 rounded-md outline-none focus:ring-2 focus:ring-[#007aff] ${errors.name ? 'border-2 border-[#00aaff]' : ''}`} 
                  />
                  {errors.name && <span className="text-[#00aaff] text-[13px] font-medium">Enter your name</span>}
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (errors.email && e.target.value.trim()) setErrors({...errors, email: false});
                    }}
                    placeholder="you@example.com" 
                    className={`w-full bg-white text-gray-700 text-base py-3 px-4 rounded-md outline-none focus:ring-2 focus:ring-[#007aff] ${errors.email ? 'border-2 border-[#00aaff]' : ''}`} 
                  />
                  {errors.email && <span className="text-[#00aaff] text-[13px] font-medium">Enter your email</span>}
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-medium">Phone</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if (errors.phone && e.target.value.trim()) setErrors({...errors, phone: false});
                    }}
                    placeholder="Your phone number" 
                    className={`w-full bg-white text-gray-700 text-base py-3 px-4 rounded-md outline-none focus:ring-2 focus:ring-[#007aff] ${errors.phone ? 'border-2 border-[#00aaff]' : ''}`} 
                  />
                  {errors.phone && <span className="text-[#00aaff] text-[13px] font-medium">Enter a phone number</span>}
                </div>
              </div>
            )}

            {/* Submit / Navigation Buttons */}
            <div className="flex justify-between items-center pt-2">
              {step > 1 ? (
                <button 
                  onClick={handleBack}
                  className="text-white hover:text-gray-300 font-medium text-sm flex items-center space-x-2 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
              ) : (
                <div></div>
              )}
              
              <button 
                onClick={handleContinue}
                className="bg-[#007aff] hover:bg-blue-600 text-white font-medium text-sm py-2.5 px-6 rounded-md flex items-center space-x-2 transition-colors"
              >
                <span>{step === 3 ? "Submit" : "Continue"}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
