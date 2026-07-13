"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does your agency provide?",
    answer: "We offer a comprehensive suite of digital services including UI/UX design, mobile and web application development, branding, and custom software solutions tailored to your business needs."
  },
  {
    question: "How do you approach a new project?",
    answer: "Our process begins with discovery and research, followed by strategic planning, design, development, and finally testing and launch. We ensure close collaboration at every step."
  },
  {
    question: "What is the typical timeline for a project?",
    answer: "Timelines vary depending on the scope and complexity of the project. A typical web design project might take 4-8 weeks, while a full application can take 3-6 months."
  },
  {
    question: "How do you handle revisions?",
    answer: "We include dedicated revision rounds in our design and development phases to ensure the final product perfectly aligns with your vision and requirements."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is project-based and depends on your specific needs. Check out our Pricing section for our standard packages, or contact us for a custom quote."
  }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white text-black py-16 md:py-32 w-full px-4 md:px-12" id="faq">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
                
                {/* Left Side: Headings */}
                <div className="flex flex-col gap-6 max-w-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-2.5 border border-black/20 rounded-full px-4 py-2 w-fit">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-[13px] tracking-wide font-medium uppercase text-gray-700">FAQs</span>
                        </div>
                    </div>
                    
                    <h2 className="text-[40px] md:text-[64px] font-medium leading-[1.05] tracking-tight">
                        Got questions?<br/>
                        <span className="text-[#a3a3a3]">We've got answers</span>
                    </h2>
                    
                    <p className="text-gray-500 text-lg mt-4 leading-relaxed max-w-md">
                        Everything you need to know about our process, pricing, and how we work together
                    </p>
                </div>

                {/* Right Side: Accordion */}
                <div className="flex flex-col gap-4 w-full max-w-2xl lg:ml-auto">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col bg-[#f5f5f5] rounded-[2rem] overflow-hidden transition-all duration-300"
                        >
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full px-6 md:px-8 py-5 md:py-6 text-left focus:outline-none"
                            >
                                <span className="text-[15px] md:text-[17px] font-medium pr-4 md:pr-8">{faq.question}</span>
                                <span className="text-2xl font-light text-gray-500 transform transition-transform duration-300">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            
                            <div 
                                className={`grid transition-all duration-300 ease-in-out ${
                                    openIndex === index ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden px-6 md:px-8">
                                    <p className="text-gray-500 leading-relaxed text-[14px] md:text-[15px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
