"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const services = [
    {
        id: "01",
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user experiences through thoughtful design principles and user-centered approaches.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop",
        details: "We craft beautiful, functional interfaces that delight users and drive engagement. Our design process includes user research, wireframing, prototyping, and iterative testing to ensure optimal user experiences."
    },
    {
        id: "02",
        title: "Mobile Design",
        description: "Designing responsive and mobile-first experiences that work seamlessly across all devices and screen sizes.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=700&fit=crop",
        details: "Our mobile-first approach ensures your application looks and performs perfectly on smartphones, tablets, and desktops. We optimize touch interactions and create fluid, responsive layouts."
    },
    {
        id: "03",
        title: "Development",
        description: "Building robust, scalable, and high-performance web applications using modern technologies and best practices.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=700&fit=crop",
        details: "We transform designs into fully functional applications with clean, maintainable code. Our development expertise includes React, Next.js, Node.js, and cloud infrastructure deployment."
    }
];

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const serviceItemsRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Initial animations with scroll trigger
        if (titleRef.current) {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        if (descriptionRef.current) {
            gsap.from(descriptionRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        if (serviceItemsRef.current) {
            gsap.from(gsap.utils.toArray(serviceItemsRef.current.children), {
                opacity: 0,
                x: -50,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: serviceItemsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        if (contentRef.current) {
            gsap.from(contentRef.current, {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }, { scope: sectionRef });

    useGSAP(() => {
        // Animate content change when service changes
        if (contentRef.current) {
            gsap.to(contentRef.current, {
                opacity: 0,
                x: 30,
                duration: 0.3,
                onComplete: () => {
                    gsap.to(contentRef.current, {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            });
        }

        if (imageRef.current) {
            gsap.to(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                onComplete: () => {
                    gsap.to(imageRef.current, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            });
        }
    }, { scope: sectionRef, dependencies: [activeService] });

    return (
        <section ref={sectionRef} className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-16" id="services">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        Services
                    </h2>
                    <p ref={descriptionRef} className="text-gray-400 text-lg md:text-xl max-w-2xl">
                        We offer comprehensive digital solutions to help your business thrive in the modern world.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side - Service List */}
                    <div ref={serviceItemsRef} className="space-y-4 min-w-0">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border ${activeService === index
                                    ? "bg-white/10 border-white/30"
                                    : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-2xl font-mono ${activeService === index ? "text-white" : "text-gray-500"
                                        }`}>
                                        [{service.id}]
                                    </span>
                                    <h3 className={`text-xl md:text-2xl font-medium ${activeService === index ? "text-white" : "text-gray-400"
                                        }`}>
                                        {service.title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side - Content */}
                    <div ref={contentRef} className="relative">
                        <div className="relative">
                            <img
                                ref={imageRef}
                                src={services[activeService].image}
                                alt={services[activeService].title}
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-lg" />
                        </div>

                        <div className="mt-8">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                {services[activeService].title}
                            </h3>
                            <p className="text-gray-300 text-lg mb-6">
                                {services[activeService].description}
                            </p>
                            <p className="text-gray-400 leading-relaxed">
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