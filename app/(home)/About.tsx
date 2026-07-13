import Image from "next/image"

const AboutSection = () => {
    return (
        <section id="about" className="bg-[#0a0a0a] text-white py-16 md:py-32 w-full">
            <div className="w-full px-4 md:px-12 mb-12 md:mb-16 flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="flex flex-col gap-8 max-w-[900px]">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2.5 border border-white/20 rounded-full px-4 py-2">
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <span className="text-[13px] tracking-wide font-medium uppercase text-gray-200">Who we are</span>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-[56px] font-medium leading-[1.1] tracking-tight text-white">
                            We build search-first digital systems to help category <span className="text-gray-500">leaders lead their industries.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-end gap-2 pb-2">
                        <button className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-semibold hover:text-red-500 transition-colors group">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-500 transition-colors">
                                <svg className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <span className="w-24 text-left leading-tight">About the Studio</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal scroll section with scroll snapping */}
            <div className="w-full pl-4 md:pl-12 pr-4 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
                <style>{`
                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
                <section className="w-full overflow-x-auto  gap-6 ">
                    <div className="w-full flex gap-6">

                        {/* Card 1 */}
                        <div className="relative w-[260px] md:w-[420px] h-[320px] md:h-[550px] rounded-[32px] overflow-hidden shrink-0 group snap-center">
                            <Image src="/assets/hero.jpg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="About 1" />
                        </div>
                        {/* Card 2 */}
                        <div className="relative w-[260px] md:w-[420px] h-[320px] md:h-[550px] rounded-[32px] overflow-hidden shrink-0 group snap-center">
                            <Image src="/assets/hero.jpg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="About 2" />
                        </div>
                        {/* Card 3 */}
                        <div className="relative w-[260px] md:w-[420px] h-[320px] md:h-[550px] rounded-[32px] overflow-hidden shrink-0 group snap-center">
                            <Image src="/assets/hero.jpg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="About 3" />
                        </div>
                        {/* Card 4 */}
                        <div className="relative w-[260px] md:w-[420px] h-[320px] md:h-[550px] rounded-[32px] overflow-hidden shrink-0 group snap-center">
                            <Image src="/assets/hero.jpg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="About 4" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default AboutSection