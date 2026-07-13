"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CTASection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const container = containerRef.current;
        const cursor = cursorRef.current;
        
        if (!container || !cursor) return;

        // Ensure initial state is hidden and offset so the cursor is centered on mouse
        gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

        const onMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            // Calculate mouse position relative to the container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(cursor, {
                x: x,
                y: y,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
        };

        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseenter", onMouseEnter);
        container.addEventListener("mouseleave", onMouseLeave);

        return () => {
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseenter", onMouseEnter);
            container.removeEventListener("mouseleave", onMouseLeave);
        };
    }, { scope: containerRef });

    return (
        <section className="bg-white py-12 px-4 md:px-12 pb-16 md:pb-32">
            <div 
                ref={containerRef} 
                className="relative max-w-[1400px] mx-auto w-full h-[400px] md:h-[600px] bg-[#0a0a0a] rounded-[2rem] overflow-hidden flex items-center justify-center cursor-none group"
            >
                {/* Background Image */}
                <Image 
                    src="/assets/hero.jpg" 
                    fill 
                    className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
                    alt="CTA Background" 
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Custom Mouse Follower */}
                <div 
                    ref={cursorRef} 
                    className="absolute top-0 left-0 w-28 h-28 bg-[#e53935] rounded-full flex items-center justify-center text-white font-medium text-[15px] pointer-events-none z-50 tracking-wide shadow-2xl"
                >
                    Let's Talk
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4">
                    <h2 className="text-4xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                        Ready to elevate <br/> 
                        <span className="text-gray-400">your digital presence?</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-lg mt-2">
                        Get in touch with us today to schedule a callback and discuss how we can help your brand grow.
                    </p>
                    <button className="mt-4 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors pointer-events-auto">
                        Request a Callback
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
