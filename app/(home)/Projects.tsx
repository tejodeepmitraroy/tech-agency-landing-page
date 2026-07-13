"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ProjectsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        // Stagger fade in with blur animation on scroll
        gsap.fromTo(projectsRef.current, 
            { 
                opacity: 0, 
                y: 50, 
                filter: "blur(10px)" 
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%", // Triggers when top of section is at 70% of viewport
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="projects" className="bg-white text-black py-16 md:py-32 w-full px-4 md:px-12">
            <div className="w-full flex flex-col gap-12 md:gap-24 max-w-[1400px] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2.5 border border-black/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-[13px] tracking-wide font-medium uppercase text-gray-700">Selected Work</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-[56px] font-medium leading-[1.1] tracking-tight text-black">
                        Featured Projects
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32">
                    
                    {/* Project 1 */}
                    <div ref={el => { projectsRef.current[0] = el; }} className="flex flex-col gap-6 md:-mt-16">
                        <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden group">
                            <Image 
                                src="/assets/hero.jpg" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                                alt="Project 1" 
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-2">Fintech Dashboard</h3>
                            <p className="text-gray-600">UI/UX Design • Web App</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div ref={el => { projectsRef.current[1] = el; }} className="flex flex-col gap-6 md:mt-24">
                        <div className="relative w-full h-[350px] md:h-[600px] rounded-[2rem] overflow-hidden group">
                            <Image 
                                src="/assets/hero.jpg" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                                alt="Project 2" 
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-2">E-commerce Experience</h3>
                            <p className="text-gray-600">Branding • Webflow</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div ref={el => { projectsRef.current[2] = el; }} className="flex flex-col gap-6">
                        <div className="relative w-full h-[350px] md:h-[600px] rounded-[2rem] overflow-hidden group">
                            <Image 
                                src="/assets/hero.jpg" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                                alt="Project 3" 
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-2">Healthcare App</h3>
                            <p className="text-gray-600">Mobile Design • iOS</p>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div ref={el => { projectsRef.current[3] = el; }} className="flex flex-col gap-6 md:mt-32">
                        <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden group">
                            <Image 
                                src="/assets/hero.jpg" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                                alt="Project 4" 
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-2">Crypto Platform</h3>
                            <p className="text-gray-600">Development • Web3</p>
                        </div>
                    </div>

                </div>
                
                <div className="flex justify-center mt-12">
                    <button className="px-8 py-4 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors font-medium text-[15px]">
                        View All Projects
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
