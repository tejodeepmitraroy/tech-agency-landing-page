"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const services = [
    {
        id: "01",
        title: "Digital Design",
        description: "Creating intuitive and engaging user experiences through thoughtful design principles and user-centered approaches.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop",
        details: "We craft beautiful, functional interfaces that delight users and drive engagement. Our design process includes user research, wireframing, prototyping, and iterative testing to ensure optimal user experiences."
    },
    {
        id: "02",
        title: "Development",
        description: "Designing responsive and mobile-first experiences that work seamlessly across all devices and screen sizes.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=700&fit=crop",
        details: "Our mobile-first approach ensures your application looks and performs perfectly on smartphones, tablets, and desktops. We optimize touch interactions and create fluid, responsive layouts."
    },
    {
        id: "03",
        title: "Branding",
        description: "Building robust, scalable, and high-performance web applications using modern technologies and best practices.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=700&fit=crop",
        details: "We transform designs into fully functional applications with clean, maintainable code. Our development expertise includes React, Next.js, Node.js, and cloud infrastructure deployment."
    }
];

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        // Animate content change when service changes
        if (contentRef.current) {
            gsap.fromTo(contentRef.current, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out"
            });
        }

        if (imageRef.current) {
            gsap.fromTo(imageRef.current, {
                opacity: 0,
                scale: 0.95
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        }
    }, { scope: sectionRef, dependencies: [activeService] });

    return (
        <section ref={sectionRef} className="bg-[#0a0a0a] text-white py-16 md:py-32 px-4 md:px-12" id="services">
            <div className="w-full flex flex-col gap-8 md:gap-12">
                
                {/* Header */}
                <div className="flex flex-col gap-8 max-w-[900px]">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2.5 border border-white/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-[13px] tracking-wide font-medium uppercase text-gray-200">Our Services</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-[56px] font-medium leading-[1.1] tracking-tight text-white">
                        Comprehensive solutions to <span className="text-gray-500">transform your brand.</span>
                    </h2>
                </div>

                {/* Services Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10">
                    
                    {/* Left: Accordion / List */}
                    <div className="flex flex-col gap-0 border-t border-white/10">
                        {services.map((service, index) => (
                            <div 
                                key={service.id} 
                                onClick={() => setActiveService(index)}
                                className={`flex items-start justify-between py-10 border-b border-white/10 cursor-pointer transition-colors ${activeService === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                            >
                                <div className="flex gap-4 md:gap-10">
                                    <span className="text-sm tracking-widest font-mono mt-2">({service.id})</span>
                                    <h3 className="text-2xl md:text-5xl font-medium tracking-tight">{service.title}</h3>
                                </div>
                                <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${activeService === index ? 'bg-white text-black rotate-45' : 'bg-transparent text-white'}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Content & Image display */}
                    <div className="flex flex-col relative rounded-[2rem] overflow-hidden bg-[#111] p-1 h-fit">
                        <img
                            ref={imageRef}
                            src={services[activeService].image}
                            alt={services[activeService].title}
                            className="w-full h-[300px] md:h-[400px] object-cover rounded-[1.8rem]"
                        />
                        <div ref={contentRef} className="p-6 md:p-10 flex flex-col gap-4">
                            <h4 className="text-2xl font-medium">{services[activeService].title}</h4>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {services[activeService].details}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;