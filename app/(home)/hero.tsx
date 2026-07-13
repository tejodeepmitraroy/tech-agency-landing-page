"use client";

import { useRef } from "react";
import Image from "next/image"
import Navbar from "./navbar"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLImageElement>(null);
    const textRef1 = useRef<HTMLHeadingElement>(null);
    const textRef2 = useRef<HTMLParagraphElement>(null);
    const tagRef = useRef<HTMLDivElement>(null);
    const bottomNavRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial load animations (Tweening)
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

        tl.fromTo(bgRef.current, 
            { scale: 1.2, filter: "blur(10px)" },
            { scale: 1, filter: "blur(0px)", duration: 2 }
        )
        .fromTo([tagRef.current, textRef1.current, textRef2.current], 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2 },
            "-=1.5"
        )
        .fromTo([bottomNavRef.current, buttonsRef.current],
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1 },
            "-=1"
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className='w-full h-dvh bg-[#0a0a0a] p-3'>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                {/* Background Image with Overlay */}
                <Image 
                    ref={bgRef}
                    src="/assets/hero.jpg" 
                    fill 
                    className="object-cover" 
                    alt="hero background" 
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Navbar (positioned absolutely inside the relative container) */}
                <Navbar />

                {/* Main Content Container */}
                <div className="absolute inset-0 flex flex-col justify-between pt-24 pb-6 px-6 md:pt-32 md:pb-8 md:px-12 text-white">
                    
                    {/* Top Content (Headings) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 mt-4 md:mt-12">
                        <div className="flex flex-col max-w-3xl">
                            <div ref={tagRef} className="flex items-center gap-2.5 mb-6">
                                <div className="w-2.5 h-2.5 bg-red-600"></div>
                                <p className="text-white text-[15px] font-semibold tracking-wide">Next-Gen Design Agency</p>
                            </div>
                            <h1 ref={textRef1} className="text-[40px] md:text-[80px] font-medium text-left leading-[1.05] tracking-tight">
                                Next-Gen<br />
                                Design Agency for<br />
                                Growing Brands.
                            </h1>
                        </div>
                        
                        <div ref={textRef2} className="flex flex-col text-left max-w-sm mb-4">
                            <p className="text-white text-lg md:text-[22px] leading-snug font-medium">
                                Branding<br />
                                Mobile & Web App Design<br />
                                for Startups and Giants
                            </p>
                        </div>
                    </div>

                    {/* Bottom Footer Content */}
                    <div className="flex flex-col sm:flex-row justify-between items-end w-full">
                        <div ref={bottomNavRef} className="flex flex-wrap gap-4 md:gap-12 text-white font-medium text-sm md:text-[15px] mb-6 sm:mb-0">
                            <span>+ Define</span>
                            <span>+ Design</span>
                            <span>+ Development</span>
                        </div>

                        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="flex items-center justify-center gap-2 bg-[#e53935] text-white px-7 py-3.5 rounded-full font-medium hover:bg-red-700 transition-colors text-[15px] w-full sm:w-auto">
                                View Projects
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium hover:bg-gray-200 transition-colors text-[15px] w-full sm:w-auto">
                                Reach Out
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection